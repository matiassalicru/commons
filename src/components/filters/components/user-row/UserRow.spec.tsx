import { render, fireEvent } from '@testing-library/react'

import { UserRow } from './UserRow'

const setup = (mock = {}) =>
  render(
    <UserRow
      data={{
        id: 1234,
        roleId: 4,
        picture: '',
        remainingHours: 0,
        firstName: 'Dwigth',
        lastName: 'Schrute',
        email: 'prueba@gmail.com',
      }}
      onSelect={() => null}
      {...mock}
    />
  )

describe('<UserRow />', () => {
  test('Should call onClick function when Wrapper is clicked', () => {
    const onClickMock = jest.fn()
    const { getByRole } = setup({
      onSelect: onClickMock,
    })

    const email = getByRole('checkbox')

    fireEvent.click(email)

    expect(onClickMock).toHaveBeenCalled()
  })

  test('should match with the snapshot when isSelected is true', () => {
    const { container } = setup({
      isSelected: true,
    })

    expect(container).toBeInTheDocument()
  })
})
