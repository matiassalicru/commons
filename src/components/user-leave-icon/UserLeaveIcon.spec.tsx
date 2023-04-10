import { render } from '@testing-library/react'
import { UserLeaveIcon } from './UserLeaveIcon'

describe('<UserLeaveIcon />', () => {
  test('should render UserLeaveIcon', () => {
    const { container } = render(<UserLeaveIcon typeCode="UL1" />)
    expect(container).toBeInTheDocument()
  })
})
