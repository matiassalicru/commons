import { render, cleanup } from '@testing-library/react/pure'
import { InputHourButton } from './InputHourButton'
import { InputHourButtonProps } from './InputHourButton.interface'

const wordingButton = {
  buttonEdit: 'edit',
  buttonAccept: 'accept',
  buttonDecline: 'decline',
}
const permissions = {
  edit: true,
  delete: true,
}
const componentProps = {
  hasComments: false,
  taskIdComments: 123,
  wordings: wordingButton,
  onClickActionComments: jest.fn(),
  handleDeleteSuggestion: jest.fn(),
  handleAcceptSuggestion: jest.fn(),
  handleAcceptTracked: jest.fn(),
  handleDeleteTracked: jest.fn(),
  hourSuggested: 0,
  minutesSuggested: 0,
  hourTracked: 1,
  minuteTracked: 0,
  permissions,
}
const TestComponent = (args: InputHourButtonProps) => <InputHourButton {...args} />

describe('<InputHour />', () => {
  afterEach(() => cleanup())
  it('Should render the tracket input and suggested input', () => {
    const { container } = render(<TestComponent {...componentProps} />)
    expect(container).toBeInTheDocument()
  })
  it('Should render only tracked input hour', () => {
    const { container } = render(
      <TestComponent {...componentProps} hourSuggested={0} minutesSuggested={0} disabledComments />
    )
    expect(container).toBeInTheDocument()
  })
})
