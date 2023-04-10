import { render } from '@testing-library/react'
import { EntitySelector } from './EntitySelector'

const setup = (mock = {}) => render(<EntitySelector selectTitle="Test" inputPlaceHolder="Search" {...mock} />)

describe('<EntitySelector />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
