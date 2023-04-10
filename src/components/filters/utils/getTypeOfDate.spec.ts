import { getTypeOfDate } from './getTypeOfDate'

jest.spyOn(Date, 'now').mockImplementation(() => new Date('2021-05-15'))

describe('getTypeOfDate', () => {
  test('Should return false if the value received is not fromDate, toDate, to or from', () => {
    const values = {
      dummyValue: 'dummy',
    }

    const result = getTypeOfDate(values)

    expect(result).toBeFalsy()
  })

  test('Should return a number when a predefined date is received', () => {
    const values = {
      fromDate: '2021-06-01',
      toDate: '2021-09-01',
    }

    const result = getTypeOfDate(values)

    expect(result).toBe(3)
  })

  test('Should return true if the date received is a non-predefined date', () => {
    const values = {
      fromDate: '2021-06-01',
      toDate: '2021-02-01',
    }

    const result = getTypeOfDate(values)

    expect(result).toBe(true)
  })

  test('Should return 0 when is this month', () => {
    const values = {
      fromDate: '2021-05-01',
      toDate: '2021-05-31',
    }

    const result = getTypeOfDate(values)

    expect(result).toBe(0)
  })

  test('Should not return 0 when is not this month', () => {
    const values = {
      fromDate: '2021-01-10',
      toDate: '2021-02-31',
    }

    const result = getTypeOfDate(values)

    expect(result).not.toBe(0)
  })

  test('Should return 1 when fromDate and toDate was first and last day of last month', () => {
    const values = {
      fromDate: '2021-05-01',
      toDate: '2021-05-31',
    }

    const result = getTypeOfDate(values)

    expect(result).not.toBe(1)
  })
})
