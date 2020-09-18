# Factful.Deno

Factful.deno is actually the same as **Factful.js** and **Factful.py**!

This package is actually my very first package on Deno so this is just my test package but maintained and working!

### Quick Example

```ts
import { facts, search } from "https://raw.githubusercontent.com/Scientific-Guy/factful.deno/master/mod.ts"

// Get Random Facts from Random Category
console.log(facts().all)

// Getting Random Facts from Selected Category
// Current Categories: Space, Food, Computer, Emoji
console.log(facts().space)
console.log(facts().food)
console.log(facts().computer)
console.log(facts().emoji)

// Get array of facts by search!
console.log(search('space'))
// Will return you the set of facts which includes the word 'space'
```

Use Issues for Issues. Like the Project? Star it!

**For further Issues:** [Join our Discord Server](https://discord.gg/FrduEZd)
