import { render, screen } from '@testing-library/react'

import { L2PositionsSkeleton } from './L2PositionsSkeleton'

const setup = () => render(<L2PositionsSkeleton />)

const styles = {
  width: '180px',
  height: '30px',
  'border-radius': '5px',
}

describe('<L2TextSkeleton />', () => {
  test('Should have the adecuate styles', () => {
    const { container } = setup()

    screen.debug(container)
    expect(container).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle(styles)
  })
})
