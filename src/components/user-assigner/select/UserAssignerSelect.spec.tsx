import { fireEvent, render } from '@testing-library/react'
import { UserAssignerSelect } from './UserAssignerSelect'

const setup = (mock = {}) =>
  render(
    <UserAssignerSelect
      selected={[1, 2]}
      coordinates={{ x: 0, y: 0 }}
      translations={{}}
      fetchUsers={jest.fn()}
      {...mock}
    />
  )

describe('<UserAssignerSelect />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when props are enabled', () => {
    const tests = [
      {
        selected: true,
        onlyView: true,
        deleteItem: false,
        showRoleClient: true,
      },
      {
        selected: true,
        onlyView: true,
        deleteItem: false,
        showRoleClient: false,
      },
      {
        selected: true,
        onlyView: true,
        deleteItem: true,
        showRoleClient: true,
      },
      {
        selected: true,
        onlyView: true,
        deleteItem: true,
        showRoleClient: false,
      },
      {
        onlyView: true,
        deleteItem: true,
        showRoleClient: false,
        selected: [1, 2],
      },
    ]

    tests.forEach(test => {
      const { container } = setup(test)

      expect(container).toBeInTheDocument()
    })
  })

  test('Should change input value when onChange function executed', () => {
    const { getByPlaceholderText } = setup({
      translations: {
        searchInputPlaceholder: 'search input',
      },
    })

    const input = getByPlaceholderText('search input')

    fireEvent.change(input, {
      target: {
        value: 'dummy value',
      },
    })

    expect(input.value).toBe('dummy value')
  })
})
