import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react/pure'
import userEvent from '@testing-library/user-event'
import { SuggestedHourButton } from './SuggestedHourButton'
import { SuggestionHourButtonProps } from './SuggestedHourButton.interface'

const wordings = {
  buttonEdit: 'buttonEdit',
  buttonAccept: 'buttonAccept',
  buttonDecline: 'buttonDecline',
}
const componentProps = {
  hour: 1,
  minutes: 30,
  handleDeleteSuggestion: jest.fn(),
  handleAcceptSuggestion: jest.fn(),
  wordings,
  taskId: 123,
}
const TestComponent = (args: SuggestionHourButtonProps) => <SuggestedHourButton {...args} />

describe('<SuggestedHourButton />', () => {
  afterEach(cleanup)
  it('Accept suggestion with button', () => {
    const { container } = render(<TestComponent {...componentProps} />)
    userEvent.hover(container.firstChild?.firstChild as HTMLElement)
    const acceptButtonSuggestion = screen.getByLabelText(componentProps.wordings.buttonAccept)
    fireEvent.click(acceptButtonSuggestion)
    waitFor(() =>
      expect(componentProps.handleAcceptSuggestion).toHaveBeenCalledWith({
        hour: 1,
        minutes: 30,
      })
    )
  })
  it('Declined suggestion with button', () => {
    const { container } = render(<TestComponent {...componentProps} />)
    userEvent.hover(container.firstChild?.firstChild as HTMLElement)
    const declinedButtonSuggestion = screen.getByLabelText(componentProps.wordings.buttonDecline)
    fireEvent.click(declinedButtonSuggestion)
    waitFor(() => expect(componentProps.handleDeleteSuggestion).toHaveBeenCalledTimes(1))
  })
  it('Edited suggestion with button and accept with enter key', async () => {
    const newValueHour = 5
    const { container } = render(<TestComponent {...componentProps} />)
    userEvent.hover(container.firstChild?.firstChild as HTMLElement)
    const declinedButtonSuggestion = screen.getByLabelText(componentProps.wordings.buttonEdit)
    fireEvent.click(declinedButtonSuggestion.firstChild as HTMLElement)
    const inputHour = screen.getByDisplayValue('1')
    fireEvent.change(inputHour, { target: { value: newValueHour } })
    expect(inputHour).toHaveDisplayValue(`${newValueHour}`)
    fireEvent.keyDown(inputHour, { key: 'Enter', code: 'Enter' })
    expect(componentProps.handleAcceptSuggestion).toHaveBeenCalledWith({
      edited: true,
      hour: 5,
      minutes: 30,
    })
  })
  it('Edited suggestion with button and accept with click outside', async () => {
    const newValueHour = 5
    const { container } = render(<TestComponent {...componentProps} />)
    userEvent.hover(container.firstChild?.firstChild as HTMLElement)
    const declinedButtonSuggestion = screen.getByLabelText(componentProps.wordings.buttonEdit)
    fireEvent.click(declinedButtonSuggestion.firstChild as HTMLElement)
    const inputHour = screen.getByDisplayValue('1')
    fireEvent.change(inputHour, { target: { value: newValueHour } })
    expect(inputHour).toHaveDisplayValue(`${newValueHour}`)
    fireEvent.click(container)
    expect(componentProps.handleAcceptSuggestion).toHaveBeenCalledWith({
      edited: true,
      hour: 5,
      minutes: 30,
    })
  })
  it('Edited suggestion with button and accept with click outside', async () => {
    const newValueHour = 5
    const { container } = render(<TestComponent {...componentProps} />)
    userEvent.hover(container.firstChild?.firstChild as HTMLElement)
    const declinedButtonSuggestion = screen.getByLabelText(componentProps.wordings.buttonEdit)
    fireEvent.click(declinedButtonSuggestion.firstChild as HTMLElement)
    const inputHour = screen.getByDisplayValue('1')
    fireEvent.change(inputHour, { target: { value: newValueHour } })
    expect(inputHour).toHaveDisplayValue(`${newValueHour}`)
    const inputMinutes = screen.getByDisplayValue('30')
    fireEvent.change(inputMinutes, { target: { value: newValueHour } })
    expect(inputMinutes).toHaveDisplayValue(`${newValueHour}`)
    userEvent.tab()
    userEvent.tab()
    expect(componentProps.handleAcceptSuggestion).toHaveBeenCalledWith({
      edited: true,
      hour: 5,
      minutes: 5,
    })
  })
})
