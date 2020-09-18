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

export function facts(): factType{
  const allFacts: string[] = [
    randomize(computerFacts),
    randomize(emojiFacts),
    randomize(spaceFacts),
    randomize(foodFacts)
  ]
  return{
    all: randomize(allFacts),
    computer: allFacts[0],
    emoji: allFacts[1],
    space: allFacts[2],
    food: allFacts[3]
  }
}

export const version = '0.0.2';
