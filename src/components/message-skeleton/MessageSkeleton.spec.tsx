import { render } from '@testing-library/react'
import { MessageSkeleton } from './MessageSkeleton'

const setup = (mock = {}) => render(<MessageSkeleton quantity={0} {...mock} />)

describe('<MessageSkeleton />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should render 2 list when quantity is 2', () => {
    const { container } = setup({
      quantity: 2,
    })
    const list = container.querySelectorAll('[data-testid="message-skeleton-list"]')

    expect(list.length).toBe(2)
  })
})
