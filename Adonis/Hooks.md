# 🪄 Concept 7: Model Hooks — Before aur After wali Magic
### Task we can perform
#### Think, jab bhi koi user create ho, toh automatically:
1. password hash ho jaye ✅
2. welcome email chala jaye ✅
3. ya logs ban jaye ✅

### When Hooks works
- `beforeCreate`	Create hone se pehle
- `afterCreate`	Create hone ke baad
- `beforeSave`	Create/update dono se pehle
- `afterSave`	Save hone ke baad (create/update)
- `beforeDelete`	Delete hone se pehle
- `afterDelete`	Delete hone ke baad

### 🛠️ Example 1: Password hash karo before save
```ts
📁 User.ts model mein:

import { BaseModel, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null }) // Hide password in output
  public password: string

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}

```
### 🧾 What is Logger?
#### Adonis.js ka built-in logging system hai jo automatically aata hai.
### 🛠️ Example 2: Log banao after create
#### 📂 Where to use Logger?
##### ✅ 1. Model Hooks ke andar
```ts
app/Models/User.ts

import Logger from '@ioc:Adonis/Core/Logger'

@afterCreate()
public static async logUser(user: User) {
  Logger.info(`New user created: ${user.email}`)
}

```
#### ✅ 2. Controllers ke andar
```ts
app/Controllers/Http/UserController.ts

import Logger from '@ioc:Adonis/Core/Logger'

export default class UserController {
  public async register({ request, response }) {
    try {
      const data = request.only(['email', 'password'])
      Logger.info(`Trying to register user: ${data.email}`)

      // Registration logic...
      
      Logger.success(`User registered successfully: ${data.email}`)
      return response.created({ message: 'User registered' })
    } catch (error) {
      Logger.error(`User registration failed: ${error.message}`)
      return response.internalServerError({ error: 'Registration failed' })
    }
  }
}

```
#### ✅ 3. Services ke andar
```ts
app/Services/UserService.ts

import Logger from '@ioc:Adonis/Core/Logger'

class UserService {
  async createUser(data) {
    Logger.info('Creating user inside service')
    // logic...
  }
}

```
#### ✅ 4. Middleware ke andar
```ts
app/Middleware/LogRequest.ts

import Logger from '@ioc:Adonis/Core/Logger'

export default class LogRequest {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    Logger.info(`Incoming request: ${request.method()} ${request.url()}`)
    await next()
  }
}

```
```ts
```
```ts
```