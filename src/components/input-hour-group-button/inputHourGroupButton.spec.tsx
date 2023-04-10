import { fireEvent, render, screen, cleanup } from '@testing-library/react/pure'
import { InputHourGroupButton } from './InputHourGroupButton'
import { InputHourGroupButtonProps } from './InputHourGroupButton.interface'

const componentProps = {
  handleSelectedInput: jest.fn(),
}

const TestComponent = ({ ...props }: InputHourGroupButtonProps) => <InputHourGroupButton {...props} />

describe('<InputHourGroupButton />', () => {
  afterEach(() => cleanup())
  test('should render InputHourGroupButton', () => {
    const { container } = render(<TestComponent {...componentProps} />)
    expect(container).toBeInTheDocument()
  })

  test('should fire click event', () => {
    const borderSuggestion = {
      selected: '#0094ca',
      unSelected: 'transparent',
    }

    const borderButton = {
      selected: '#5a5a5a',
      unSelected: '#ebebeb',
    }

    const borderStyle = 'border: 1px solid'

    const mockSuggestion = { hour: 10, minute: 0 }

    render(<TestComponent suggestion={mockSuggestion} {...componentProps} />)
    const firstButton = screen.getByText(`0 h30 m`)
    const secondButton = screen.getByText(`1 h0 m`)
    const thirdButton = screen.getByText(`2 h0 m`)
    const suggestion = screen.getByText(`${mockSuggestion.hour} h${mockSuggestion.minute} m`)

    expect(suggestion).toBeInTheDocument()

    // Button suggestion selected
    fireEvent.click(suggestion)
    expect(suggestion).toHaveStyle(`${borderStyle} ${borderSuggestion.selected}`)
    expect(firstButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)
    expect(secondButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)
    expect(thirdButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)

    // First button selected
    fireEvent.click(firstButton)
    expect(suggestion).toHaveStyle(`${borderStyle} ${borderSuggestion.unSelected}`)
    expect(firstButton).toHaveStyle(`${borderStyle} ${borderButton.selected}`)
    expect(secondButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)
    expect(thirdButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)

    // Second button selected
    fireEvent.click(secondButton)
    expect(suggestion).toHaveStyle(`${borderStyle} ${borderSuggestion.unSelected}`)
    expect(firstButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)
    expect(secondButton).toHaveStyle(`${borderStyle} ${borderButton.selected}`)
    expect(thirdButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)

    // Third button selected
    fireEvent.click(thirdButton)
    expect(thirdButton).toHaveStyle(`${borderStyle} ${borderButton.selected}`)
    expect(suggestion).toHaveStyle(`${borderStyle} ${borderSuggestion.unSelected}`)
    expect(firstButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)
    expect(secondButton).toHaveStyle(`${borderStyle} ${borderButton.unSelected}`)
  })
})
