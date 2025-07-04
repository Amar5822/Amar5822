# Concept 5: Global Middleware — Har Request Pe Filter Lagana

### 🛠️ How to make Global Middleware?
1. Step: Command 
```ts
node ace make:middleware VerifyCustomHeader
=> this will make file : app/Middleware/VerifyCustomHeader.ts
```
### app/Middleware/VerifyCustomHeader.ts
```ts
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VerifyCustomHeader {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const header = ctx.request.header('x-my-secret')

    if (header !== 'amarjeet123') {
      return ctx.response.unauthorized({ message: 'Access denied' })
    }

    // sab sahi toh aage jao
    await next()
  }
}

```
### Step 3: start/kernel.ts Register Global Middleware 
```ts
Server.middleware.register([
  () => import('@ioc:Adonis/Core/BodyParser'),
  () => import('App/Middleware/VerifyCustomHeader'), // 👈 Add this
])

```

