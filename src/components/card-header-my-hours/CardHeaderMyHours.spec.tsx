import { render, screen, cleanup } from '@testing-library/react/pure'
import { CardHeaderMyHours } from './CardHeaderMyHours'
import { CardHeaderMyHoursProps } from './CardHeaderMyHours.interface'

const componentsProps: CardHeaderMyHoursProps = {
  infoHour: '4h',
  titleSuggestion: 'titleSuggestion',
  titleTracked: 'titleTracked',
  subtitle: 'Subtitle',
}

const TestComponent = ({ ...props }: CardHeaderMyHoursProps) => <CardHeaderMyHours {...props} />

describe('<CardMyHours />', () => {
  afterEach(() => cleanup())
  test('should render component', () => {
    const { container } = render(<TestComponent {...componentsProps} />)
    expect(container).toBeInTheDocument()
  })
  test('should have subtitle', () => {
    render(<TestComponent {...componentsProps} />)
    expect(screen.getByText(componentsProps.subtitle)).toBeInTheDocument()
  })
  test('should have a daily hour user', () => {
    const userInfoMock = 8
    render(<TestComponent userInfo={userInfoMock} {...componentsProps} />)
    const wrapper = screen.getByText(`/ ${userInfoMock}h`)
    expect(wrapper.textContent).toContain(`${userInfoMock}`)
  })
  test('should have a info hour user', () => {
    render(<TestComponent {...componentsProps} />)
    const infoHourComponent = screen.getByText(componentsProps.infoHour)
    expect(infoHourComponent).toBeInTheDocument()
  })
  test('should have change color when charged hour exceeds a daily hours user', () => {
    const exceedsHours = true
    const isProgressBar = true
    render(<TestComponent isProgressBar={isProgressBar} exceedsDailyHour={exceedsHours} {...componentsProps} />)
    const infoHourComponent = screen.getByText(componentsProps.infoHour)
    expect(infoHourComponent).toHaveStyle('color: #EC6F13')
  })

  test('should have indicator when showIndicator is true and color is defined', () => {
    const showIndicator = true
    const indicatorColor = '#EC6F13'
    render(<TestComponent showIndicator={showIndicator} indicatorColor={indicatorColor} {...componentsProps} />)
    const indicator = screen.getByRole('status')
    expect(indicator).toBeInTheDocument()
    expect(indicator).toHaveStyle('background-color: #EC6F13')
  })
})
