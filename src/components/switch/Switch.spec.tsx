import { fireEvent, render } from '@testing-library/react'
import { Switch, SwitchSize } from './Switch'

const setup = (mock = {}) =>
  render(
    <Switch
      onClick={() => {
        // Default on change action
      }}
      checked={false}
      name=""
      dataTestIdSpan="spanTest"
      size={SwitchSize.NORMAL}
      {...mock}
    />
  )

test('Should call onClick function when checkbox changes switch', () => {
  const onClickMock = jest.fn()
  const { getByTestId } = setup({
    onClick: onClickMock,
  })
  const spanChecked = getByTestId('spanTest')

  fireEvent.click(spanChecked)

  expect(onClickMock).toHaveBeenCalled()
})
