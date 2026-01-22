/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
/**
 * Inertia (Frontend) Route
 */
router.on('/').renderInertia('home')

/**
 * RAG API Routes
 */
router.post('/upload', '#controllers/Http/RagController.upload')
router.post('/ask', '#controllers/Http/RagController.ask')
