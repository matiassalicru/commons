import { cleanup, render } from '@testing-library/react/pure'
import { ModalSuggestionOptions } from './ModalSuggestionOptions'
import { ModalSuggestionOptionsProps } from './ModalSuggestionOptions.interface'

const wordings = {
  buttonEdit: 'buttonEdit',
  buttonAccept: 'buttonAccept',
  buttonDecline: 'buttonDecline',
}
const componentProps = {
  handleEditHour: jest.fn(),
  handleDenyHour: jest.fn(),
  handleConfirmHour: jest.fn(),
  wordings,
}
const TestComponent = (args: ModalSuggestionOptionsProps) => <ModalSuggestionOptions {...args} />

describe('<ModalSuggestionOptions />', () => {
  afterEach(cleanup)
  it('Should show buttons', () => {
    const { container, getByLabelText } = render(<TestComponent {...componentProps} />)
    expect(container).toBeInTheDocument()
    expect(getByLabelText(wordings.buttonAccept)).toBeInTheDocument()
    expect(getByLabelText(wordings.buttonDecline)).toBeInTheDocument()
    expect(getByLabelText(wordings.buttonEdit)).toBeInTheDocument()
  })
})
