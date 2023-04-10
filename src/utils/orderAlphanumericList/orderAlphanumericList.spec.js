import { orderAlphanumericList } from './orderAlphanumericList'

const listUnordered = [
  { id: 4, strng: 'b', nmber: 5 },
  { id: 5, strng: 'c', nmber: 0 },
  { id: 1, strng: 'a', nmber: 1 },
  { id: 3, strng: 'b', nmber: 15 },
  { id: 2, strng: 'a', nmber: -1 },
]
const listDescExpected = [
  { id: 1, strng: 'a', nmber: 1 },
  { id: 2, strng: 'a', nmber: -1 },
  { id: 3, strng: 'b', nmber: 15 },
  { id: 4, strng: 'b', nmber: 5 },
  { id: 5, strng: 'c', nmber: 0 },
]
const listAscExpected = [
  { id: 2, strng: 'a', nmber: -1 },
  { id: 1, strng: 'a', nmber: 1 },
  { id: 4, strng: 'b', nmber: 5 },
  { id: 3, strng: 'b', nmber: 15 },
  { id: 5, strng: 'c', nmber: 0 },
]

const listOrderStringOnly = [
    { id: 1, strng: 'a', nmber: 1 },
    { id: 2, strng: 'a', nmber: -1 },
    { id: 4, strng: 'b', nmber: 5 },
    { id: 3, strng: 'b', nmber: 15 },
    { id: 5, strng: 'c', nmber: 0 },
  ]

describe('Order list by strng and nmber, order desc as default', () => {
  it('it is verified that it returns a list ordered by: stringKey, and numberKey, in descendant order', () => {
    const result = orderAlphanumericList({ list: listUnordered, stringKey: 'strng', numberKey: 'nmber' })
    expect(result[2]).toEqual(listDescExpected[2])
    expect(result[1]).not.toEqual(listDescExpected[4])
    expect(result).toEqual(expect.arrayContaining(listDescExpected))
  })
})

describe('Order list by strng and nmber, order asc via prop', () => {
  it('it is verified that it returns a list ordered by: stringKey, and numberKey, in ascendant order', () => {
    const result = orderAlphanumericList({
      list: listUnordered,
      stringKey: 'strng',
      numberKey: 'nmber',
      numericOrder: 'asc',
    })
    expect(result[2]).toEqual(listAscExpected[2])
    expect(result[1]).not.toEqual(listAscExpected[4])
    expect(result).toEqual(expect.arrayContaining(listAscExpected))
  })
})

describe('Order list by strng only', () => {
  it('it is verified that it returns a list ordered by: stringKey', () => {
    const result = orderAlphanumericList({
      list: listUnordered,
      stringKey: 'strng',
    })
    expect(result[2]).toEqual(listOrderStringOnly[2])
    expect(result[1]).not.toEqual(listOrderStringOnly[4])
    expect(result).toEqual(expect.arrayContaining(listOrderStringOnly))
  })
})
