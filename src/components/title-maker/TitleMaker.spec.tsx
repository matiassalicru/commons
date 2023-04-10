import { render } from '@testing-library/react'
import { TitleMaker } from './TitleMaker'

const setup = (mock = {}) => render(<TitleMaker {...mock} />)

describe('<TitleMaker />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
