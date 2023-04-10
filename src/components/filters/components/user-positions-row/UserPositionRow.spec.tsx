import { render, fireEvent } from '@testing-library/react'

import { UserPositionsRow } from './UserPositionsRow'

const setup = (mock = {}) =>
  render(
    <UserPositionsRow
      categoryName="categoryName"
      name="Fullstack developer"
      id={1}
      onSelect={() => null}
      index={0}
      {...mock}
    />
  )

describe('<UserPositionsRow />', () => {
  test('Should call onClick function when Wrapper is clicked', () => {
    const onClickMock = jest.fn()
    const { getByRole } = setup({
      onSelect: onClickMock,
    })

    const position = getByRole('checkbox')

    fireEvent.click(position)

    expect(onClickMock).toHaveBeenCalled()
  })

  test('should be in the document when isSelected is true', () => {
    const { container } = setup({
      isSelected: true,
    })

    expect(container).toBeInTheDocument()
  })
})
