import { pressDownArrow, pressUpArrow } from './pressArrow'

describe('pressDownArrow', () => {
  it('it is verified that it adds the indices ', () => {
    const result = pressDownArrow(2, 10)
    expect(result).toBeDefined()
    expect(typeof result).toEqual('number')
    expect(result).toBe(3)
  })

  it('it is verified that it meets the condition and returns zero ', () => {
    const result = pressDownArrow(2, 2)
    expect(result).toBeDefined()
    expect(typeof result).toEqual('number')
    expect(result).toBe(0)
  })
})

describe('pressUpArrow', () => {
  it('it is verified that it subtracts the indices ', () => {
    const result = pressUpArrow(4, 10)
    expect(result).toBeDefined()
    expect(typeof result).toEqual('number')
    expect(result).toBe(3)
  })

  it('it is verified that it meets the condition', () => {
    const result = pressUpArrow(0, 10)
    expect(result).toBeDefined()
    expect(typeof result).toEqual('number')
    expect(result).toBe(9)
  })
})
