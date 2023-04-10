import { render } from '@testing-library/react'
import { EmptyResult } from './EmptyResponse'

const setup = (mock = {}) => render(<EmptyResult translations={{}} {...mock} />)

describe('<EmptyResult />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
