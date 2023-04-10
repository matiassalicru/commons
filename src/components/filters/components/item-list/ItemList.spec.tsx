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
      {...mock}
    />
  )

describe('<ItemList />', () => {
  test('Should be in the document with borderColor', () => {
    const { container } = setup({
      borderColor: '#0094ca',
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with icon', () => {
    const icon = <div>dummy react fragment</div>
    const { container } = setup({
      icon,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should call onSelect function when item is selected', () => {
    const onSelectMock = jest.fn()
    const { getByRole } = setup({
      onSelect: onSelectMock,
    })

    const item = getByRole('checkbox')

    fireEvent.click(item)

    expect(onSelectMock).toHaveBeenCalled()
  })
})
