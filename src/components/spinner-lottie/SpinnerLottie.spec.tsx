import { render } from '@testing-library/react'
import { SpinnerLottie } from './SpinnerLottie'

const setup = (mock = {}) => render(<SpinnerLottie {...mock} />)

describe('<SpinnerLottie />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
