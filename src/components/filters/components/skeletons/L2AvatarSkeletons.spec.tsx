import { render } from '@testing-library/react'

import { L2AvatarSkeletons } from './L2AvatarSkeletons'

const setup = () => render(<L2AvatarSkeletons />)

describe('<L2AvatarSkeletons />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
