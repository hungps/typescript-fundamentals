/**
 * ? TYPE CASTING
 * ? TYPE-GUARD
 */

enum DailyDrink {
  pepsi = 'pepsi',
  appleJuice = 'apple-juice',
  water = 'water',
  coffee = 'coffee',
}

const consume = (drink: DailyDrink) => {}

// * Type casting
let responseData: unknown // Server return a response in which we can't know the type of data

// consume(drink) // ----> ERROR: drink is unknown

// Only force cast if you are 100% sure about the type of data
// Force-cast is ABSOLUTELY NOT recommended
const drink = responseData as DailyDrink
consume(drink)

// * Type-Guard
const isDrink = (value: unknown): value is DailyDrink => {
  // Array.some() will return true if at least one element in the array match the condition
  // So that we are completely sure that the value is DailyDrink
  return Object.values(Drink).some(drink => drink === value)
}

// Usage
const getUpperCasedDrink = (value: unknown): string | undefined => {
  // value.toUpperCase() // ----> ERROR: value is unknown

  if (isDrink(value)) {
    return value.toUpperCase() // OK
  }

  return undefined
}

const coca = getUpperCasedDrink('coca-cola') // return undefined
const pepsi = getUpperCasedDrink('pepsi') // return 'PEPSI'

// ! Cheatsheets
// ? https://www.typescriptlang.org/cheatsheets
