import { render } from '@testing-library/react'
import { PmModal } from './PmModal'

const setup = (mock = {}) => render(<PmModal translations={{}} {...mock} />)

describe('<PmModal />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
