import { render } from '@testing-library/react'
import { HelperTip } from './HelperTip'

const setup = (mock = {}) =>
  render(<HelperTip wordingTip="" letterToShow="?" forTooltip="helper-tip" place="top" {...mock} />)

describe('<HelperTip />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
