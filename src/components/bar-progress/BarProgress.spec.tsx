import { render } from '@testing-library/react'
import { BarProgress } from './BarProgress'

const setup = (mock = {}) => render(<BarProgress {...mock} />)

describe('<BarProgress />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
