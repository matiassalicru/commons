import { render } from '@testing-library/react'
import { CalendarIntegrationSkeleton } from './CalendarIntegrationSkeleton'

const setup = (mock = {}) => render(<CalendarIntegrationSkeleton quantity={1} {...mock} />)

describe('<AttachmentCardSkeleton />', () => {
  test('Should exist in a document with default props', () => {
    const { getByTestId } = setup()
    const list = getByTestId('attachment-card-list')

    expect(list).toBeInTheDocument()
  })

  test('Should exist in a document with 3 quantity', () => {
    const { container } = setup({
      quantity: 3,
    })

    const list = container.querySelectorAll('[data-testid="attachment-card-list"]')

    expect(list.length).toBe(3)
  })
})
