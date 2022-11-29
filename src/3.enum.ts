/**
 * ? Enum
 */

// * The official way
enum Drink {
  cocaCola = 'coca-cola',
  appleJuice = 'apple-juice',
  water = 'water',
  coffee = 'coffee',
}

let topPickDrink: Drink = Drink.coffee // Required "Drink."
// topPickDrink = 'coffee' // ----> ERROR

// * Another way to declare enum
const Food = {
  donut: 'donut',
  friedChicken: 'fried-chicken',
  hamburger: 'hamburger',
} as const

type Food = typeof Food[keyof typeof Food]

let bestFood: Food = Food.donut // OK
bestFood = 'donut' // Also OK
