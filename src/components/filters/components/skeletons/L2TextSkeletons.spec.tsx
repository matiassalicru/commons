import { render } from '@testing-library/react'

import { L2TextSkeletons } from './L2TextSkeletons'

const setup = () => render(<L2TextSkeletons />)

describe('<L2TextSkeletons />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
