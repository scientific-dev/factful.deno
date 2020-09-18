interface factType{
  computer: string,
  food: string,
  emoji: string,
  space: string,
  all: string
}

import { computerFacts } from "https://raw.githubusercontent.com/Scientific-Guy/factful.deno/master/utils/computer.ts"

import { emojiFacts } from "https://raw.githubusercontent.com/Scientific-Guy/factful.deno/master/utils/emoji.ts"

import { spaceFacts } from "https://raw.githubusercontent.com/Scientific-Guy/factful.deno/master/utils/space.ts"

import { foodFacts } from "https://raw.githubusercontent.com/Scientific-Guy/factful.deno/master/utils/food.ts"

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

export const version: string = '0.0.1';
