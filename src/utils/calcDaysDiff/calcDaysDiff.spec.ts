import { calcDaysDiff } from './calcDaysDiff'

const START_DATE = '2022-04-10T00:00:00Z'
const END_DATE = '2022-04-20T00:00:00Z'

const ANOTHER_END_DATE = '2022-04-20T23:55:19Z'
const ANOTHER_START_DATE = '2022-04-19T19:51:10.148Z'

describe('Calculate days difference', () => {
  it('it is verified that it returns the days of diference between two dates', () => {
    const result = calcDaysDiff(START_DATE, END_DATE)
    expect(result).toBe(10)
  })
})

describe('Calculate days difference', () => {
  it('it is verified that it returns the days of diference between two dates', () => {
    const result = calcDaysDiff(START_DATE, ANOTHER_END_DATE)
    expect(result).toBe(10)
  })
})

describe('Calculate days difference', () => {
  it('it is verified that it returns the days of diference between two dates', () => {
    const result = calcDaysDiff(ANOTHER_START_DATE, ANOTHER_END_DATE)
    expect(result).toBe(1)
  })
})
