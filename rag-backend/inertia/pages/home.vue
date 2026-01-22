<script setup lang="ts">
import { ref } from 'vue'
import { Head } from '@inertiajs/vue3'

const file = ref<File | null>(null)
const uploadStatus = ref('')
const isUploading = ref(false)
const question = ref('')
const answer = ref('')
const isAsking = ref(false)

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    file.value = target.files[0]
  }
}

const uploadFile = async () => {
  if (!file.value) {
    uploadStatus.value = 'Please select a file first.'
    return
  }

  isUploading.value = true
  uploadStatus.value = 'Uploading...'

  const formData = new FormData()
  formData.append('file', file.value)

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`)
    }

    const result = await response.json()
    uploadStatus.value = `Success: ${result.message} (${result.chunks} chunks processed)`
  } catch (error: any) {
    uploadStatus.value = `Error: ${error.message}`
  } finally {
    isUploading.value = false
  }
}

const askQuestion = async () => {
  if (!question.value.trim()) return

  isAsking.value = true
  answer.value = ''

  try {
    const response = await fetch('/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: question.value }),
    })

    if (!response.ok) {
      throw new Error(`Request failed: ${response.statusText}`)
    }

    const result = await response.json()
    answer.value = result.answer
  } catch (error: any) {
    answer.value = `Error: ${error.message}`
  } finally {
    isAsking.value = false
  }
}
</script>

<template>
  <Head title="RAG Assistant" />

  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-3xl mx-auto space-y-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-3xl font-extrabold text-gray-900">PDF RAG Assistant</h1>
        <p class="mt-2 text-sm text-gray-600">Upload a PDF and ask questions about its content.</p>
      </div>

      <!-- Upload Section -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">1. Upload Document</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <p class="mb-2 text-sm text-gray-500">
                  <span class="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p class="text-xs text-gray-500">PDF (MAX. 20MB)</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                accept=".pdf"
                @change="handleFileChange"
              />
            </label>
          </div>

          <div v-if="file" class="text-sm text-gray-600">
            Selected: <span class="font-medium">{{ file.name }}</span>
          </div>

          <button
            @click="uploadFile"
            :disabled="!file || isUploading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isUploading ? 'Processing...' : 'Upload PDF' }}
          </button>

          <div
            v-if="uploadStatus"
            :class="{
              'text-green-600': uploadStatus.startsWith('Success'),
              'text-red-600': !uploadStatus.startsWith('Success'),
            }"
            class="text-sm text-center font-medium mt-2"
          >
            {{ uploadStatus }}
          </div>
        </div>
      </div>

      <!-- Chat Section -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">2. Ask Questions</h2>
        <div class="space-y-4">
          <div>
            <label for="question" class="block text-sm font-medium text-gray-700"
              >Your Question</label
            >
            <textarea
              id="question"
              v-model="question"
              rows="3"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              placeholder="What is the main topic of this document?"
            ></textarea>
          </div>

          <button
            @click="askQuestion"
            :disabled="!question || isAsking"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isAsking ? 'Thinking...' : 'Ask AI' }}
          </button>
        </div>

        <!-- Answer Section -->
        <div v-if="answer" class="mt-6 border-t pt-4">
          <h3 class="text-sm font-medium text-gray-900">Answer:</h3>
          <div
            class="mt-2 text-gray-700 prose prose-sm max-w-none whitespace-pre-wrap bg-gray-50 p-4 rounded-md"
          >
            {{ answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
