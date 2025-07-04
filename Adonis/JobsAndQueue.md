# 🚚 Concept 2: Jobs & Queues — Work in Background 

1. Install package:

npm install @adonisjs/bull
node ace configure @adonisjs/bull

2. Banaye ek Job:
node ace make:job SendWelcomeEmail

3. app/Jobs/SendWelcomeEmail.ts
```ts
import type { JobHandlerContract } from '@ioc:Rocketseat/Bull'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class SendWelcomeEmail implements JobHandlerContract {
  public static get key() {
    return 'SendWelcomeEmail'
  }

  public async handle(job) {
    const { email, name } = job.data

    await Mail.send((message) => {
      message
        .to(email)
        .subject('Welcome!')
        .htmlView('emails.welcome', { name })
    })

    await job.remove()
  }
}

```
4. Job ko Dispatch karo (background mein kaam de do):
```ts
import Bull from '@ioc:Rocketseat/Bull'

await Bull.add('SendWelcomeEmail', {
  email: 'amarjeet@example.com',
  name: 'Amarjeet',
})

```
5. node ace bull:listen



