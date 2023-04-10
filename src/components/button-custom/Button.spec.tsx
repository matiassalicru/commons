import { fireEvent, render } from '@testing-library/react'
import { ButtonCustom } from './ButtonCustom'

const setup = (mock = {}) =>
  render(
    <ButtonCustom
      onClick={() => {
        // Default on change action
      }}
      dataTestIdButton="dataTestIdButton"
      {...mock}
    >
      +Nuevo
    </ButtonCustom>
  )
test('Should call onClick function when button is clicked', () => {
  const onClickMock = jest.fn()
  const { getByTestId } = setup({
    onClick: onClickMock,
  })
  const buttonTobeClicked = getByTestId('dataTestIdButton')

  fireEvent.click(buttonTobeClicked)

  expect(onClickMock).toHaveBeenCalled()
})
