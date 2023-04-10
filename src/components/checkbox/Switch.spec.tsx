import { fireEvent, render } from '@testing-library/react'
import { Checkbox } from './Checkbox'

const setup = (mock = {}) =>
  render(
    <Checkbox
      onClick={() => {
        // Default on change action
      }}
      checked={false}
      name=""
      dataTestIdLabel="labelTest"
      ableToEdit
      {...mock}
    />
  )

describe('<Checkbox />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})

test('Should call onClick function when checkbox is clicked', () => {
  const onClickMock = jest.fn()
  const { getByTestId } = setup({
    onClick: onClickMock,
  })
  const labelChecked = getByTestId('labelTest')

  fireEvent.click(labelChecked)

  expect(onClickMock).toHaveBeenCalled()
})
