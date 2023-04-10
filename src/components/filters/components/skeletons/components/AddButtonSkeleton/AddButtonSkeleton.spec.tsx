import { render } from '@testing-library/react'

import { AddButtonSkeleton } from './AddButtonSkeleton'

const setup = () => render(<AddButtonSkeleton />)

describe('<AddButtonSkeleton />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
