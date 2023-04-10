import { fireEvent, render } from '@testing-library/react'
import { Item } from './Item'
import { KEY_RIGHT } from '../../../../../../constants'

const setup = (mock = {}) => render(<Item text="dummy text" icon="dummy icon" {...mock} />)

describe('<Item />', () => {
  test('Should call onClick function when right arrow key is pressed', () => {
    const onClickMock = jest.fn()
    const { container } = setup({
      onClick: onClickMock,
      isSelected: true,
    })

    fireEvent.keyDown(container, {
      keyCode: KEY_RIGHT,
    })

    expect(onClickMock).toHaveBeenCalled()
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
})
