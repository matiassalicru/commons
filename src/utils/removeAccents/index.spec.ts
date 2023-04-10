import { removeAccents } from '.'

describe('removeAccents', () => {
  test('should normalize name correctly', () => {
    const names = [
      {
        value: 'Julián Ottech',
        expected: 'Julian Ottech',
      },
      {
        value: 'José Manero',
        expected: 'Jose Manero',
      },
      {
        value: 'José Frías',
        expected: 'Jose Frias',
      },
      {
        value: 'José Frías 2',
        expected: 'Jose Frias 2',
      },
      {
        value: 123,
        expected: '123',
      },
    ]

    names.forEach(name => expect(removeAccents(name?.value)).toBe(name?.expected))
  })

  test('should return empty string when parameter is not a string or number', () => {
    const values = [
      {
        value: true,
        expected: '',
      },
      {
        value: ['dummy'],
        expected: '',
      },
    ]

    values.forEach(name => expect(removeAccents(name.value)).toBe(name.expected))
  })
})
