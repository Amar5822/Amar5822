
import { vectorStore } from '../../Services/VectorStore.js'
import { chatModel, embeddingModel } from '../../Services/GenimiService.js'
import pdf from 'pdf-parse'

export default class RagController {
  async upload({ request, response }) {
    const pdfFile = request.file('file')
    if (!pdfFile) return response.badRequest('No file')

    const buffer = await pdfFile.toBuffer()
    const data = await pdf(buffer)

    const chunks = data.text.match(/(.|[\r\n]){1,800}/g) || []

    for (let chunk of chunks) {
      const embeddingResult = await embeddingModel.embedContent(chunk)
      vectorStore.push({
        text: chunk,
        embedding: embeddingResult.embedding.values,
      })
    }

    return { message: 'PDF processed', chunks: chunks.length }
  }

  async ask({ request }) {
    const question = request.input('question')

    const qEmbedding = await embeddingModel.embedContent(question)

    const bestMatch = vectorStore
      .map(v => ({
        ...v,
        score: cosineSimilarity(
          qEmbedding.embedding.values,
          v.embedding
        ),
      }))
      .sort((a, b) => b.score - a.score)[0]

    const prompt = `
Context:
${bestMatch.text}

Question:
${question}
`

    const result = await chatModel.generateContent(prompt)

    return {
      answer: result.response.text()
    }
  }
}
