import { render } from '@testing-library/react'
import { AvatarDeleteable } from './AvatarDeleteable'

const setup = (mock = {}) => render(<AvatarDeleteable {...mock} />)

describe('<AvatarDeleteable />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
