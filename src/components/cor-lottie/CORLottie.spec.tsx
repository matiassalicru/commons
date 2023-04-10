import { render } from '@testing-library/react'
import { CORLottie } from './CORLottie'

const setup = (mock = {}) => render(<CORLottie {...mock} />)

describe('<CORLottie />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
