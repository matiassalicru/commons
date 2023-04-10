import { render } from '@testing-library/react'

import { CleanButtonSkeleton } from './CleanButtonSkeleton'

const setup = () => render(<CleanButtonSkeleton />)

describe('<CleanButtonSkeleton />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
