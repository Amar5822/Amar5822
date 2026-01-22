import fs from 'node:fs'
import { createRequire } from 'module'
import type { HttpContext } from '@adonisjs/core/http'
import { vectorStore } from '../../Services/VectorStore.js'
import { chatModel, embeddingModel } from '../../Services/GenimiService.js'

const require = createRequire(import.meta.url)

// Polyfill DOMMatrix for pdf-parse/pdf.js
if (!global.DOMMatrix) {
  // @ts-ignore
  global.DOMMatrix = class DOMMatrix {
    constructor() {
      // Basic mock implementation if needed, or empty
      return this
    }
  }
}

// Import the library
const pdfLib = require('pdf-parse')
const PDFParse = pdfLib.PDFParse

function cosineSimilarity(a: number[], b: number[]) {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0)
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0))
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0))
  return dotProduct / (magnitudeA * magnitudeB)
}

export default class RagController {
  async upload({ request, response }: HttpContext) {
    const pdfFile = request.file('file')
    if (!pdfFile || !pdfFile.tmpPath) return response.badRequest('No file')

    const buffer = fs.readFileSync(pdfFile.tmpPath)

    // Parse using the class-based API
    const parser = new PDFParse({ data: buffer })
    const data = await parser.getText()

    const chunks = data.text.match(/(.|[\r\n]){1,800}/g) || []

    for (let chunk of chunks) {
      if (!chunk || !chunk.trim()) continue
      const embeddingResult = await embeddingModel.embedContent(chunk)
      if (embeddingResult && embeddingResult.embedding) {
        vectorStore.push({
          text: chunk,
          embedding: embeddingResult.embedding.values,
        })
      }
    }

    return { message: 'PDF processed', chunks: chunks.length }
  }

  async ask({ request }: HttpContext) {
    const question = request.input('question')

    const qEmbedding = await embeddingModel.embedContent(question)

    let bestMatch = { text: '' }
    if (vectorStore.length > 0) {
      bestMatch = vectorStore
        .map((v) => ({
          ...v,
          score: cosineSimilarity(qEmbedding.embedding.values, v.embedding),
        }))
        .sort((a, b) => b.score - a.score)[0] || { text: '' }
    }

    const prompt = `
Context:
${bestMatch ? bestMatch.text : ''}

Question:
${question}
`

    const result = await chatModel.generateContent(prompt)

    return {
      answer: result.response.text(),
    }
  }
}
