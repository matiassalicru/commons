import { render } from '@testing-library/react'

import { ChipSkeleton } from './ChipSkeleton'

const setup = (mock = {}) => render(<ChipSkeleton {...mock} />)

describe('<AddButtonSkeleton />', () => {
  test('Should match with the snapshot with default size', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should match with the snapshot with large size', () => {
    const { container } = setup({
      size: 'large',
    })

    expect(container).toBeInTheDocument()
  })
})
