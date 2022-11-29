/**
 * ? OBJECT
 */

// * Pre-defined fields
type User = {
  fullName: string
  age: number
  isOfficial: boolean
}

// --- OR
// interface User {
//   fullName: string
//   age: number
//   isOfficial: boolean
// }

const hungps: User = {
  fullName: 'Pham Sy Hung',
  age: 25,
  isOfficial: true,
}

// --- UNDEFINED-able (Optional fields)
type UserWithOptionalAge = {
  fullName: string
  age?: number
  isOfficial: boolean
}

const hungps2: UserWithOptionalAge = {
  fullName: 'Pham Sy Hung',
  isOfficial: true,
}

// * Unknown fields
type AnObjectType = { [key: string]: string }

// --- OR
// interface AnObjectType {
//   [key: string]: string
// }

const anObject: AnObjectType = {
  field1: 'value1',
  field2: 'value2',
}

// * Combine between pre-defined fields & unknown fields
type DailyChecklist = {
  wakeUp: boolean
  work: boolean
  sleep: boolean
  [key: string]: boolean
}

// --- OR
// interface DailyChecklist {
//   wakeUp: boolean
//   work: boolean
//   sleep: boolean
//   [key: string]: boolean
// }

const mondayChecklist: DailyChecklist = {
  wakeUp: true,
  work: true,
  sleep: true,
  exercise: true, // extra field
}

const hasWakedUp = mondayChecklist.wakeUp
const hasExercised = mondayChecklist.exercise

// * Type can extends each other
type Shape = {
  perimeter: number
  area: number
}

type Square = Shape & {
  sideLength: number
}

type Rectangle = Shape & {
  width: number
  height: number
}

interface Circle extends Shape {
  radius: number
}

const square: Square = {
  area: 4,
  perimeter: 4,
  sideLength: 2,
}

const circle: Circle = {
  radius: 3,
  area: Math.pow(3, 2) * Math.PI,
  perimeter: 3 * 2 * Math.PI,
}

// * Extracting key/value type from an object TYPE
type AnotherObject = {
  field1: string
  field2: number
  field3: boolean
  4: string[]
}

const sampleObject: AnotherObject = {
  field1: 'value1',
  field2: 2,
  field3: true,
  4: ['lorem ipsum'],
}

// ? keyof: Get key types of an object type
const key: keyof AnotherObject = 'field1' // ----> `key` can only be field1 OR field2 OR field3 OR field4

type SampleObjectValue = AnotherObject[keyof AnotherObject]

const value: SampleObjectValue = 'test' // ----> `value` can only be string OR number OR boolean OR string[]

// * Extracting key/value type from an object VALUE
const anotherObject = {
  field4: 'value4',
  field5: 'value5',
  field6: true,
}

// ? typeof VARIABLE: Get current type of VARIABLE
type AnotherObjectType = typeof anotherObject

// ? keyof TYPE: Get ALL key types of TYPE
type AllAnotherObjectKey = keyof AnotherObjectType

// Get all value types
type AllAnotherObjectValue = AnotherObjectType[AllAnotherObjectKey]

// 3 lines above can be simplified to:
type AnotherObjectValueInline = typeof anotherObject[keyof typeof anotherObject]

// Only get the value type of specific field
type AnotherObjectField6Value = AnotherObjectType['field6']
