import { fireEvent, render } from '@testing-library/react'
import { TrialButton, LABEL_TEST_ID } from './TrialButton'

const setup = (mock = {}) => render(<TrialButton title="Trial" {...mock} />)

describe('<TrialButton />', () => {
  test('Should show caption if captionTextContent prop is passed', () => {
    const { getByTestId } = setup({
      captionTextContent: 'Trial version: 16 days left',
    })
    const caption = getByTestId(LABEL_TEST_ID)
    expect(caption).toBeInTheDocument()
  })
})

describe('<TrialButton />', () => {
  test('Button should not be clickeable if isInteractive prop is false', () => {
    const onClickAction = jest.fn()
    const { getByText } = setup({
      isInteractive: false,
      onClickAction,
    })

    const button = getByText('Trial')

    expect(button).toHaveStyle('cursor: default')

    fireEvent.mouseOver(button)
    expect(button).toHaveStyle(`
      background-color: transparent;
    `)

    fireEvent.click(button)
    expect(onClickAction).not.toBeCalled()
  })
})

describe('<TrialButton />', () => {
  test('Button should be clickeable if isInteractive prop is not set', () => {
    const { getByText } = setup({
      isInteractive: true,
    })

    const button = getByText('Trial')

    expect(button).toHaveStyle('cursor: pointer')
  })
})
