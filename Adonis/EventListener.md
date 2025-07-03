 # Concept 3: Event Listeners — Kuch hone pe kuch aur karna

 1. Step 1: Event aur Listener banaye
```ts
  node ace make:event UserRegistered
  node ace make:listener SendWelcomeEmail
```
2. Step 2: Listener ko event se jodo
```ts
start/events.ts

import Event from '@ioc:Adonis/Core/Event'
Event.on('user:registered', 'SendWelcomeEmail.handle')

```
3. Step 3: Listener file — app/Listeners/SendWelcomeEmail.ts
```ts
import Mail from '@ioc:Adonis/Addons/Mail'
export default class SendWelcomeEmail {
  public async handle(data) {
    const { email, name } = data
    await Mail.send((message) => {
      message
        .to(email)
        .subject('Welcome!')
        .htmlView('emails.welcome', { name })
    })
  }
}

```
4. Step 4: Event ko fire karo jab zarurat ho:
```ts
import Event from '@ioc:Adonis/Core/Event'

await Event.emit('user:registered', {
  email: 'amarjeet@example.com',
  name: 'Amarjeet',
})

```


