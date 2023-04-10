import { render } from '@testing-library/react'
import { UserCapacity } from './UserCapacity'
import { AvatarSize } from './UserCapacity.interface'

const setup = (mock = {}) =>
  render(<UserCapacity picture="" size={AvatarSize.large} firstName="" lastName="" roleId={6} {...mock} />)

describe('<UserCapacity />', () => {
  test('Should be in the document', () => {
    const variations = [
      {
        fromComponent: 'from-search',
      },
      {
        remainingHours: 90,
      },
      {
        remainingHours: 60,
      },
    ]

    variations.forEach(variation => {
      const { container } = setup(variation)

      expect(container).toBeInTheDocument()
    })
  })
})
