import { cleanup, fireEvent, render, screen } from '@testing-library/react/pure'
import userEvent from '@testing-library/user-event'
import { TrackedHourButton } from './TrackedHourButton'
import { TrackedHourButtonProps } from './TrackedHourButton.interface'

const permissions = {
  edit: true,
  delete: true,
}
const componentProps = {
  hour: 1,
  minutes: 0,
  handleAcceptTracked: jest.fn(),
  handleDeleteTracked: jest.fn(),
  taskId: 123,
  permissions,
}
const TestComponent = (args: TrackedHourButtonProps) => <TrackedHourButton {...args} />

describe('<TrackedHourButton />', () => {
  afterEach(() => cleanup())
  it('Input minutes accept value with press enter', () => {
    const newValueMinutes = 5
    const { getByText } = render(<TestComponent {...componentProps} />)
    const minutes = getByText(componentProps.minutes)
    expect(minutes).toHaveTextContent('0')
    fireEvent.click(minutes)
    const inputMinutes = screen.getByDisplayValue('0')
    fireEvent.change(inputMinutes, { target: { value: newValueMinutes } })
    expect(inputMinutes).toHaveDisplayValue(`${newValueMinutes}`)
    fireEvent.keyDown(inputMinutes, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(componentProps.handleAcceptTracked).toHaveBeenCalledWith({
      hour: 1,
      minutes: 5,
    })
  })
  it('Input minutes cancel value with press esc', async () => {
    const newValueMinutes = 5
    const { findByText, getByText } = render(<TestComponent {...componentProps} />)
    const minutes = getByText(componentProps.minutes)
    expect(minutes).toHaveTextContent('0')
    fireEvent.click(minutes)
    const inputMinutes = screen.getByDisplayValue('0')
    fireEvent.change(inputMinutes, { target: { value: newValueMinutes } })
    expect(inputMinutes).toHaveDisplayValue(`${newValueMinutes}`)
    fireEvent.keyDown(inputMinutes, { key: 'Escape', code: 'Escape' })
    expect(await findByText(componentProps.minutes)).toBeInTheDocument()
  })
  it('Input minutes accept value with click outside', () => {
    const newValueMinutes = 14
    const { container, getByText } = render(<TestComponent {...componentProps} />)
    const minutes = getByText(componentProps.minutes)
    expect(minutes).toHaveTextContent('0')
    fireEvent.click(minutes)
    const inputMinutes = screen.getByDisplayValue('0')
    fireEvent.change(inputMinutes, { target: { value: newValueMinutes } })
    expect(inputMinutes).toHaveDisplayValue(`${newValueMinutes}`)
    fireEvent.click(container)
    expect(componentProps.handleAcceptTracked).toHaveBeenCalledWith({
      hour: 1,
      minutes: 5,
    })
  })
  it('Input minutes accept value with press enter', () => {
    const newValueHour = 5
    const { getByText } = render(<TestComponent {...componentProps} />)
    const hour = getByText(componentProps.hour)
    expect(hour).toHaveTextContent('1')
    fireEvent.click(hour)
    const inputHour = screen.getByDisplayValue('1')
    fireEvent.change(inputHour, { target: { value: newValueHour } })
    expect(inputHour).toHaveDisplayValue(`${newValueHour}`)
    fireEvent.keyDown(inputHour, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(componentProps.handleAcceptTracked).toHaveBeenCalledWith({
      hour: 5,
      minutes: 0,
    })
  })
  it('Input hour cancel value with press esc', async () => {
    const newValueHour = 5
    const { findByText, getByText } = render(<TestComponent {...componentProps} />)
    const hour = getByText(componentProps.hour)
    expect(hour).toHaveTextContent('1')
    fireEvent.click(hour)
    const inputHour = screen.getByDisplayValue('1')
    fireEvent.change(inputHour, { target: { value: newValueHour } })
    expect(inputHour).toHaveDisplayValue(`${newValueHour}`)
    fireEvent.keyDown(inputHour, { key: 'Escape', code: 'Escape' })
    expect(await findByText(componentProps.hour)).toBeInTheDocument()
  })
  it('Input hour accept value with click outside', () => {
    const newValueHour = 14
    const { container, getByText } = render(<TestComponent {...componentProps} />)
    const hour = getByText(componentProps.hour)
    expect(hour).toHaveTextContent('1')
    userEvent.click(hour)
    const inputHour = screen.getByDisplayValue('1')
    fireEvent.change(inputHour, { target: { value: newValueHour } })
    expect(inputHour).toHaveDisplayValue(`${newValueHour}`)
    fireEvent.click(container)
    expect(componentProps.handleAcceptTracked).toHaveBeenCalledWith({
      hour: 14,
      minutes: 0,
    })
  })
  it('Input hour deleted value with click outside', () => {
    const { getByText, getByDisplayValue } = render(<TestComponent {...componentProps} />)
    const hour = getByText(componentProps.hour)
    fireEvent.click(hour)
    const inputHour = getByDisplayValue('1')
    fireEvent.change(inputHour, { target: { value: 0 } })
    userEvent.tab()
    userEvent.tab()
    expect(componentProps.handleDeleteTracked).toHaveBeenCalledWith()
  })
})
