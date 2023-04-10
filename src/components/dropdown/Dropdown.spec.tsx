import { fireEvent, render } from '@testing-library/react'
import { Dropdown } from './Dropdown'
// Mock
import { bulkActions } from '../../mocks/bulkActions'

const setup = (mock = {}) =>
  render(
    <Dropdown
      onClose={() => true}
      positions={{ x: 0, y: 0 }}
      handleSelectItem={() => true}
      items={bulkActions.actions.actions}
      i18nSection="globals"
      {...mock}
    />
  )

describe('<Dropdown />', () => {
  test('Should call onClose when backdrop is clicked', () => {
    const onCloseMock = jest.fn()
    const { container } = setup({
      onClose: onCloseMock,
    })
    const backdrop = container.querySelector('div') as HTMLElement

    fireEvent.click(backdrop)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  test('Should call handleSelectItem when option is clicked', () => {
    const handleSelectItemMock = jest.fn()
    const { container } = setup({
      handleSelectItem: handleSelectItemMock,
    })
    const option = container.querySelectorAll('li')[0] as HTMLElement

    fireEvent.click(option)

    expect(handleSelectItemMock).toHaveBeenCalledTimes(1)
  })
})
