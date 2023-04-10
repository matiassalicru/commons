import { thousandsSeparators, setDecimals, addZeros, formatNumber } from './formatNumber'

const numA = 1.23456789
const numAUp = 1.2367
const numB = 1005000.4942

const comma = ','
const dot = '.'

describe('setDecimals util should return fixed decimals with the amount passed as prop', () => {
  it('it is verified than passing a number with decimals and prop decimals as 2, should return a string with 2 decimals', () => {
    const result = setDecimals(numA, 2)
    expect(result).toBe('1,23')
    const result2 = setDecimals(numAUp, 2)
    expect(result2).toBe('1,24')
  })
  it('it is verified than passing a number with decimals and prop decimals as 3, should return a string with 3 decimals', () => {
    const result = setDecimals(numA, 3)
    expect(result).toBe('1,235')
    const result2 = setDecimals(numAUp, 3)
    expect(result2).toBe('1,237')
  })
  it('it is verified than passing a number higher than one thousand should return a string with the passed decimal/thousand scale as prop', () => {
    const result1 = setDecimals(numB, 2)
    expect(result1).toBe('1.005.000,49')

    const result2 = setDecimals(numB, 2, dot)
    expect(result2).toBe('1.005.000,49')

    const result3 = setDecimals(numB, 2, dot, comma)
    expect(result3).toBe('1.005.000,49')
  })
})

describe('thousandsSeparators util should return a string with thousand and decimal scale passed as prop', () => {
  it('it is verified than passing a number higher than one thousand should return a string with thousandSeparator', () => {
    const result1 = thousandsSeparators(numB)
    expect(result1).toBe('1.005.000,4942')

    const result2 = thousandsSeparators(numB, dot)
    expect(result2).toBe('1.005.000,4942')

    const result3 = thousandsSeparators(numB, dot, comma)
    expect(result3).toBe('1.005.000,4942')
  })
})

describe('addZeros util should return a string if the number passed is a integer', () => {
  it('it is verified than passing a integer should return two zeros with the decimal scale passed as prop', () => {
    const result1 = addZeros(1000)
    expect(result1).toBe(',00')
    const result2 = addZeros(1000, dot)
    expect(result2).toBe('.00')
    const result3 = addZeros(1000.92, dot)
    expect(result3).toBeFalsy()
    const result4 = addZeros(1000, comma)
    expect(result4).toBe(',00')
    const result5 = addZeros(1000.92, comma)
    expect(result5).toBeFalsy()
  })
})

describe('formatNumber util should return a string with a given denomination correspondigly to the amount of zeros', () => {
  it('it is verified that passing a number greater than a thousand will return a string converted', () => {
    const result1 = formatNumber(numB)
    expect(result1).toBe('1,0 M')
    const result3 = formatNumber(2000)
    expect(result3).toBe('2 K')
  })
  it('it is verified that passing a number greater than a thousand, and decimals as prop, will return a string converted, with the amount of decimals passed', () => {
    const result2 = formatNumber(numB, 3)
    expect(result2).toBe('1,005 M')
  })
})
