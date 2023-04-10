import { fireEvent, render } from '@testing-library/react'
import { ButtonIconCustom } from './ButtonIconCustom'

const setup = (mock = {}) =>
  render(
    <ButtonIconCustom
      size={0}
      iconSize={0}
      onHoverBackground=""
      onHoverColor=""
      onHoverBorder=""
      radius=""
      borderSize={0}
      borderColor=""
      background=""
      color=""
      onClikAction={() => {
        // Click action default button
      }}
      withTip={false}
      wordingTip=""
      forTooltip=""
      enabled={false}
      place="top"
      icon="times"
      dataTestId="buttonIconCustom"
      dataRobotId=""
      {...mock}
    />
  )

describe('<ButtonIconCustom />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with differents styles', () => {
    const { container } = setup({
      radius: 20,
      enabled: false,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should call onClick function when button is clicked', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      onClikAction: onClickMock,
    })
    const button = getByTestId('buttonIconCustom')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
  })
})
