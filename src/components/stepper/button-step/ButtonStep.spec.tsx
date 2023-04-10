import { fireEvent, render } from '@testing-library/react'
import { ButtonStep } from './ButtonStep'
import { Position } from './ButtonStep.interface'

const setup = (mock = {}) =>
  render(
    <ButtonStep
      position={Position.left}
      icon="chevron-left"
      title="Back"
      onClickButton={() => {
        // Click action default
      }}
      testId="buttonBack"
      {...mock}
    />
  )

describe('<ButtonStep />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should call onClickButton function when button is clicked', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      onClickButton: onClickMock,
    })
    const button = getByTestId('buttonBack')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
  })
})
