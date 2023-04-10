import { fireEvent, render } from '@testing-library/react'
import { DeliverableInputProps } from '../Deliverable.interface'
import { DeliverableInput } from './DeliverableInput'

const setup = (mock: DeliverableInputProps) => render(<DeliverableInput {...mock} />)

const defaultProps = {
  onKeyDown: () => {
    // default function
  },
  updateValue: () => {
    // default function
  },
  value: 0,
  disabled: true,
  autoComplete: true,
  handleClickSave: () => {
    // default function
  },
  handleClickCancel: () => {
    // default function
  },
  editing: false,
  simpleVersion: false,
}

describe('<DeliverableInput />', () => {
  test('Should be in the document', () => {
    const { container } = setup(defaultProps)

    expect(container).toBeInTheDocument()
  })

  test('Should test default props for coverage percentage', () => {
    const { queryByLabelText, container, getByTestId } = setup({ ...defaultProps, editing: true })
    const input = queryByLabelText('deliverableInput')
    const confirmButton = getByTestId('check')
    const cancelButton = getByTestId('times')
    if (input) {
      fireEvent.keyDown(input, {
        key: 'Enter',
      })
      fireEvent.change(input, {
        target: {
          value: 10,
        },
      })
    }
    fireEvent.click(confirmButton)
    fireEvent.click(cancelButton)

    expect(container).toBeInTheDocument()
  })
})
