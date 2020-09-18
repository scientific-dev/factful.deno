interface factType{
  computer: string,
  food: string,
  emoji: string,
  space: string,
  all: string
}

import { computerFacts } from "./utils/computer.ts"
import { emojiFacts } from "./utils/emoji.ts"
import { spaceFacts } from "./utils/space.ts"
import { foodFacts } from "./utils/food.ts"

function randomize(arr: string[]): string{
  return arr[Math.floor(Math.random() * arr.length)]
}

const allFacts = computerFacts.concat(emojiFacts).concat(spaceFacts).concat(foodFacts)

export function facts(): factType{
  return{
    all: randomize(allFacts),
    computer: randomize(computerFacts),
    emoji: randomize(emojiFacts),
    space: randomize(spaceFacts),
    food: randomize(foodFacts)
  }
}

export function search(query: string): string[] {
  result = []
  allFacts.forEach(fact => {
    if(fact.includes(query)) result.push(fact)
  })
  return result
}

export const version = '0.0.3';
