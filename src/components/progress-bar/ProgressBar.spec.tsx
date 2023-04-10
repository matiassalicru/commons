import { cleanup } from '@testing-library/react/pure'
import { render, screen } from '@testing-library/react'
import pallete from '@projectcor/theme/lib/base/colors'
import { ProgressBar } from './ProgressBar'
import { ProgressBarProps } from './ProgressBar.interface'

const componentProps = {
  chargeBarContent: 'chargeBar',
  suggestedBarContent: 'suggestedBar',
  title: 'title',
}

const TestComponent = ({ ...props }: ProgressBarProps) => <ProgressBar {...props} />

describe('<ProgressBar />', () => {
  afterEach(() => cleanup())
  test('Should render a ProgressBar component and have a title', () => {
    render(<TestComponent {...componentProps} />)
    expect(screen.getByText(componentProps.title)).toBeInTheDocument()
  })

  test('should have a percentage progress', () => {
    const charged = 40
    render(<TestComponent chargedProgress={charged} {...componentProps} />)
    const percentHour = screen.getByText(`${charged}%`)
    expect(percentHour).toBeInTheDocument()
  })

  test('Should show empty progress bar', async () => {
    const mockEmptyHoursContent = 'Empty'
    render(<TestComponent emptyHoursContent={mockEmptyHoursContent} {...componentProps} />)

    const wrapper = screen.getByTestId('SCBPEmptyHours')
    expect(wrapper).toBeInTheDocument()
  })

  test('Should show progress bar with color red', async () => {
    const mockChargedProgress = 25

    const { getByTestId } = render(<TestComponent chargedProgress={mockChargedProgress} {...componentProps} />)

    const wrapper = getByTestId('SCBPCharged')

    expect(wrapper).toHaveStyle(`background: ${pallete.colors.error.main}`)
  })

  test('Should show progress bar with color yellow', () => {
    const mockChargedProgress = 40
    const { getByTestId } = render(<TestComponent chargedProgress={mockChargedProgress} {...componentProps} />)

    const wrapper = getByTestId('SCBPCharged')
    expect(wrapper).toHaveStyle(`background: ${pallete.colors.warning.main}`)
  })

  test('Should show progress bar with color green', () => {
    const mockChargedProgress = 82
    const { getByTestId } = render(<TestComponent chargedProgress={mockChargedProgress} {...componentProps} />)

    const wrapper = getByTestId('SCBPCharged')
    expect(wrapper).toHaveStyle(`background: #00A500`)
  })

  test('Should only show charged bar when to value is 100%', () => {
    const newProps = {
      chargedProgress: 100,
      suggestionProgress: 50,
    }

    const { queryByTestId } = render(<TestComponent {...newProps} {...componentProps} />)

    const chargedBar = queryByTestId('SCBPCharged')
    expect(chargedBar).toBeTruthy()
    const suggestedBard = queryByTestId('SCBPSuggested')
    expect(suggestedBard).toBeNull()
  })

  test('Should show progress suggested bar', async () => {
    const mockSuggestionProgress = 20
    const { getByTestId, queryByTestId } = render(
      <TestComponent suggestionProgress={mockSuggestionProgress} {...componentProps} />
    )

    const suggestedBard = getByTestId('SCBPSuggested')

    expect(suggestedBard).toBeInTheDocument()

    const chargedBar = queryByTestId('SCBPCharged')

    expect(chargedBar).toBeNull()
  })
})
