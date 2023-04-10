import { render } from '@testing-library/react'

import { L2TextSkeleton } from './L2TextSkeleton'

const setup = () => render(<L2TextSkeleton />)

describe('<L2TextSkeleton />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
