// ! Cheatsheets
// ? https://www.typescriptlang.org/cheatsheets

/**
 * ? BASIC TYPES
 * * 1. string, number, bigint, boolean
 * * 2. Array, Tuple
 * * 3. null, undefined
 * * 4. any, unknown, never, void
 * * 5. Fixed string/number/boolean type
 * * 6. Multiple types
 */

// * 1. string, number, boolean
const fullName: string = 'Pham Sy Hung'
const age: number = 25
const isOfficial: boolean = true

// * 2. Array, Tuple
const properties: Array<string> = ['laptop', 'mouse', 'monitor', 'hub']
const propertyStatuses: [hasLaptop: boolean, hasMouse: boolean, hasMonitor: boolean] = [true, true, true]

// * 3. null, undefined
const numberOfToiletPapers: number = 5
// const numberOfToiletPapers: null = null
// const numberOfToiletPapers: undefined = undefined

// * 4. any, unknown, never
let whatEver: any
let guessWhat: unknown
let notGonnaHappen: never

// * 5. Fixed string type
let oneAndOnlyString: 'some-type' = 'some-type'
let oneAndOnlyNumber: 12 = 12
let oneAndOnlyBoolean: true = true

// oneAndOnlyString = 'another-type'  // ----> ERROR
// oneAndOnlyNumber = 14              // ----> ERROR
// oneAndOnlyBoolean = false          // ----> ERROR

// * 6. Combinding multiple types
let numberOfTissues: number | undefined | null
numberOfTissues = 2
numberOfTissues = undefined
numberOfTissues = null

// numberOfTissues = '2'              // ----> ERROR
