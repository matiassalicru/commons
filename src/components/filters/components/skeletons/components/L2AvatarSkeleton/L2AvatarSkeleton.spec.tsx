import { render } from '@testing-library/react'

import { L2AvatarSkeleton } from './L2AvatarSkeleton'

const setup = () => render(<L2AvatarSkeleton />)

describe('<L2TextSkeleton />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
