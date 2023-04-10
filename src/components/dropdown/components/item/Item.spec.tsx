import { fireEvent, render } from '@testing-library/react'
import { Item } from './Item'
import { KEY_RIGHT } from '../../../../constants'

const setup = (mock = {}) =>
  render(<Item data={{ id: 'Item 1' }} text="dummy text" icon="dummy icon" onClick={() => true} {...mock} />)

describe('<Item />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should call onClick function when right arrow key is pressed', () => {
    const onClickMock = jest.fn()
    const { container } = setup({
      onClick: onClickMock,
      isSelected: true,
    })

    fireEvent.keyDown(container, {
      keyCode: KEY_RIGHT,
    })

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('Should not call onClick function when isSelected was false', () => {
    const onClickMock = jest.fn()
    const { container } = setup({
      onClick: onClickMock,
      isSelected: false,
    })

    fireEvent.keyDown(container, {
      keyCode: KEY_RIGHT,
    })

    expect(onClickMock).not.toHaveBeenCalled()
  })

  test('Should not have custom icon if an icon exist', async () => {
    const { queryByTestId } = setup({ icon: 'user' })

    const icon = queryByTestId('icon')
    const customIcon = queryByTestId('custom-icon')
    expect(icon).toBeInTheDocument()
    expect(customIcon).not.toBeInTheDocument()
  })

  test('Should not have icon if custom icon exist', async () => {
    const { queryByTestId } = setup({ icon: null, hasCustomIcon: true })

    const icon = queryByTestId('icon')
    const customIcon = queryByTestId('custom-icon')
    expect(customIcon).toBeInTheDocument()
    expect(icon).not.toBeInTheDocument()
  })
})
