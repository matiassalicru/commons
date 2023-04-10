import { render } from '@testing-library/react'
import { RoleClientModal } from './RoleClientModal'

const setup = (mock = {}) => render(<RoleClientModal translations={{}} {...mock} />)

describe('<RoleClientModal />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
