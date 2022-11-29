/**
 * ? FUNCTION
 */

// * Arrow function: The first way
const useFirstWay = (p1: string, p2: number): boolean => true

// * Arrow function: The second way
type UseSecondWay = (p1: boolean, p2: string[]) => boolean

const useSecondWay: UseSecondWay = (p1, p2) => true

// * Normal function
function someNormalFunction(p1: string, p2: string): boolean {
  return true
}

// * Optional field
const useOptionalField = (p1: string, p2?: number): boolean => true

const result = useOptionalField('test') // p2 is not required

// * Spread operator type
const useSpeadOperator = (p1: number, p2: boolean, ...args: string[]): boolean => true

useSpeadOperator(1, true, 'a', 'b', 'c', 'd', 'e')

// * Get function type
const useFunctionType = (p1: string, p2: number): boolean => true

// ? typeof FUNCTION: Get current type of FUNCTION
type UseFunctionType = typeof useFunctionType

// ? Parameters<FUNCTION-TYPE> Get parameters type of FUNCTION-TYPE
type UseFunctionParams = Parameters<UseFunctionType>

// ? ReturnType<FUNCTION-TYPE> Get return value type of FUNCTION-TYPE
type UseFunctionReturnValue = ReturnType<UseFunctionType>

// ! Parameters/ReturnType is one of Utility Types
// ? https://www.typescriptlang.org/docs/handbook/utility-types.html
// Partial, Readonly, Pick, Omit, Awaited,...
