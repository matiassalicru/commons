import { render } from '@testing-library/react'
import { Label } from './Label'

const setup = (mock = {}) => render(<Label variant="" {...mock} />)

describe('<Label />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
