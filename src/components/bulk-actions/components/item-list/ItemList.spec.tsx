import { fireEvent, render } from '@testing-library/react'
import { ItemList } from './ItemList'

const setup = (mock = {}) =>
  render(
    <ItemList
      value={{
        id: 'dummy id',
      }}
      onSelect={() => true}
      selected={false}
      text="dummy text"
      isFocused={false}
      {...mock}
    />
  )

describe('<ItemList />', () => {
  test('Should call onSelect function when item is selected', () => {
    const onSelectMock = jest.fn()
    const { getByRole } = setup({
      onSelect: onSelectMock,
    })

    const item = getByRole('checkbox')

    fireEvent.click(item)

    expect(onSelectMock).toHaveBeenCalled()
  })

  test('Should show check icon when item is selected', () => {
    const onSelectMock = jest.fn()
    const { getByRole, getByTestId } = setup({
      onSelect: onSelectMock,
    })

    const item = getByRole('checkbox')

    fireEvent.click(item)

    expect(getByTestId('check-icon')).toBeInTheDocument()
  })
})
