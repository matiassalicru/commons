import { fireEvent, render } from '@testing-library/react'
import { Dot } from './Dot'

const setup = (mock = {}) =>
  render(
    <Dot
      selected={false}
      step={1}
      onClickDot={() => {
        // Click action default
      }}
      {...mock}
    />
  )

describe('<Dot />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should call onClickDot function when dot is clicked', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      onClickDot: onClickMock,
    })
    const button = getByTestId('buttonDot')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
  })
})
