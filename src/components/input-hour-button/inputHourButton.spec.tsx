import { fireEvent, render } from '@testing-library/react'
import { InputHourButton } from './InputHourButton'
import { InputHourButtonProps } from './InputHourButton.interface'

const componentsProps = {
  hour: 0,
  minute: 0,
  handleSelectedHour: jest.fn(),
  enableSection: jest.fn(),
}

const TestComponent = ({ ...props }: InputHourButtonProps) => <InputHourButton {...props} />

describe('<InputHourButton />', () => {
  test('should render InputHourButton', () => {
    const { container } = render(<TestComponent {...componentsProps} />)
    expect(container).toBeInTheDocument()
  })

  test('should call onClick action', () => {
    const { container } = render(<TestComponent {...componentsProps} />)
    fireEvent.click(container.firstChild as HTMLElement)
    expect(componentsProps.handleSelectedHour).toHaveBeenCalled()
  })

  test('should have a border color #5a5a5a', () => {
    const { container } = render(<TestComponent selected {...componentsProps} />)
    expect(container.firstChild).toHaveStyle('border: 1px solid #5a5a5a')
  })

  test('should have a border color #0094ca', () => {
    const { container } = render(<TestComponent changeMode selected {...componentsProps} />)
    expect(container.firstChild).toHaveStyle('border: 1px solid #0094ca')
  })
})
