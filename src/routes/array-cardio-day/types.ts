export interface Inventor {
  first: string
  last: string
  year: number
  passed: number
}

export type PeopleName = (`${string}, ${string}`)