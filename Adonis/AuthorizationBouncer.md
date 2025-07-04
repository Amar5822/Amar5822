# 🛑 Concept 8: Authorization & Bouncer — Kis user ko kya karne ka haq hai
## 🛠️ Setup Bouncer in Adonis.js
### Step 1: Install Bouncer
```ts
node ace configure @adonisjs/bouncer
```
### Step 2: Define Bouncer Rule
```ts
app/Bouncers.ts
import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'

Bouncer.define('deleteUser', (user: User, targetUser: User) => {
  // sirf admin ya khud hi delete kar sakta hai
  return user.isAdmin || user.id === targetUser.id
})

```
### Step 3: Use Bouncer in Controller
```ts
app/Controllers/Http/UserController.ts
import Bouncer from '@ioc:Adonis/Addons/Bouncer'

public async destroy({ auth, params, response }: HttpContextContract) {
  const currentUser = auth.user!
  const userToDelete = await User.findOrFail(params.id)

  await Bouncer.authorize('deleteUser', userToDelete)

  await userToDelete.delete()
  return response.ok({ message: 'User deleted' })
}

```
### ✨ Bonus: Using Policies (For complex models)
```ts
node ace make:policy User

app/Policies/UserPolicy.ts

export default class UserPolicy {
  public async update(user, targetUser) {
    return user.id === targetUser.id
  }

  public async delete(user, targetUser) {
    return user.isAdmin
  }
}

```
#### 📂 File: app/Controllers/Http/UserController.ts
```ts
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'

export default class UserController {
  public async destroy({ auth, params, response }: HttpContextContract) {
    const currentUser = auth.user!
    const targetUser = await User.findOrFail(params.id)

    // 🔐 Use Bouncer policy here!
    await Bouncer.with('UserPolicy').authorize('delete', targetUser)

    await targetUser.delete()
    return response.ok({ message: 'User deleted successfully' })
  }
}

```
