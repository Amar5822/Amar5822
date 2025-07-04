# ⚙️ Concept 4: Custom Commands — Make your own Terminal Commands 
1. 🛠️ How to make Custom Command?
```ts
node ace make:command DailyReport
```
2. commands/DailyReport.ts - as above commad this file automatically generated
```ts
import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class DailyReport extends BaseCommand {
  public static commandName = 'report:daily'
  public static description = 'Send daily report to admin'

  public async run() {
    this.logger.info('⏳ Daily Report bana raha hoon...')

    // Yahan tumhara logic
    // Example: database se data lo, email bhejo
    await new Promise((r) => setTimeout(r, 1000))

    this.logger.success('✅ Daily Report bhej diya!')
  }
}

```
3. Step 3: Run command in terminal
```ts
node ace report:daily
Output:
⏳ Daily Report bana raha hoon...
✅ Daily Report bhej diya!

```
4. ✨ Bonus: Command can also take arguments 
```ts
@args.string({ description: 'User ID' })
public userId: string

public async run() {
  this.logger.info(`Cleaning user: ${this.userId}`)
}

node ace clean:user 42

```
## Benefit's 
1. Repetitive kaam automate ho jaata hai.
2. Deployment, cleanup, reports — sab kuch ek command se.
3. CRON job ke saath integrate kar sakte ho.