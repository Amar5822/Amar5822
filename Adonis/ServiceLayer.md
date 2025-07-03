# 🧱 Concept 1: Service Layer (Use Services for Business Logic)

## controllers/UserController.ts
```ts
import UserService from 'App/Services/UserService'

export default class UserController {
  async register({ request, response }) {
    const data = request.only(['email', 'password'])
    const user = await UserService.registerUser(data)
    return response.created(user)
  }
}

```
## services/UserService.ts
```ts
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

class UserService {
  async registerUser(data) {
    data.password = await Hash.make(data.password)
    return await User.create(data)
  }
}

export default new UserService()

```