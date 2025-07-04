# 🚀 Concept 6: Preloading & Lazy Loading — Relationship ko sahi time pe laana
### 🏎️ Preload (Fast & Efficient)
```ts
const users = await User.query().preload('posts')

User.ts model
@hasMany(() => Post)
public posts: HasMany<typeof Post>

Output: 
for (const user of users) {
  console.log(user.posts) // yeh already preload ho chuke hain
}

```
### 🐢 Lazy Load (Aaram se, jab zarurat ho)
```ts
const user = await User.find(1)
const posts = await user?.related('posts').query()

```
### Benefit's
1. Performance improve hota hai.
2. DB load kam hota hai.
3. Query control tumhare haath mein.
