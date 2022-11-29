/**
 * ? GENERIC
 */

// * Generic type
type ResponseData<D> = {
  status: number
  data?: D
}

// --- OR
// interface ResponseData<D> {
//   status: number
//   data?: D
// }

type BasicUser = {
  userName: string
  email: string
}

const response: ResponseData<BasicUser> = {
  status: 200,
  data: {
    userName: 'Hung',
    email: 'hungps.work@gmail.com',
  },
}

// * Generic type with default type
type ResponseDataWithError<D, E = unknown> = {
  status: number
  data?: D
  error?: E
}

// not passing the error type
const response1: ResponseDataWithError<string> = {
  status: 200,
  data: 'some-data',
}

const error1 = response1.error // error1 is unknown because we don't specify the type of error

const response2: ResponseDataWithError<string, { messsage: string }> = {
  status: 200,
  data: 'some-data',
  error: { messsage: 'hi' },
}

const error2 = response2.error // error2 is { messsage: string }

// * Generic type with [extends]
type Pagination = {
  page: number
  total: number
}

type PaginatedResponseData<D extends { pagination: Pagination }> = {
  status: number
  data?: D
}

const paginatedResponse: PaginatedResponseData<{ message: string; pagination: Pagination }> = {
  status: 200,
  data: {
    message: 'ok',
    pagination: {
      page: 1,
      total: 3,
    },
  },
}

// const paginatedResponse: PaginatedResponseData<{ message: string }>
// ----> ERROR: { message: string } does not have pagination field

// * Generic function
const useGenericFunction = <P1, P2>(p1: P1, p2: P2): P2 => p2

const result1 = useGenericFunction('one', 2)
const result2 = useGenericFunction(1, 'two')

// * Conditional type
type ACDE = 'A' | 'C' | 'D' | 'E'

type Take<CheckType, IncludeType> = CheckType extends IncludeType ? CheckType : never

type ABOnly = Take<ACDE, 'A' | 'B'>
