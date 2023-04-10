import { render } from '@testing-library/react'

import { FiltersSkeletons } from './FiltersSkeletons'

const setup = () => render(<FiltersSkeletons />)

describe('<FiltersSkeletons />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
