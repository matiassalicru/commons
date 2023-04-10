import { render } from '@testing-library/react'
import { TaskSkeleton } from './TaskSkeleton'

const setup = (mock = { quantity: 1, withFirstItem: false, withActions: true }) => render(<TaskSkeleton {...mock} />)

describe('<TaskSkeleton />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
