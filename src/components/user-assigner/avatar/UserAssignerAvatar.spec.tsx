import { render } from '@testing-library/react'
import { UserAssignerAvatar } from './UserAssignerAvatar'

const setup = (mock = {}) =>
  render(
    <UserAssignerAvatar
      avatarMapped={{
        type: 'photo',
        picture: 'picture.jpg',
        total: 1,
        remainingHours: 1,
      }}
      translations={{}}
      {...mock}
    />
  )

describe('<UserAssignerAvatar />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with different types', () => {
    const types = ['photo', 'number', 'emptyState']

    types.forEach(type => {
      const { container } = setup({
        avatarMapped: {
          type,
          picture: 'picture.jpg',
          total: 1,
          remainingHours: 1,
        },
      })

      expect(container).toBeInTheDocument()
    })
  })

  test('Should match empty snapshot when type is null', () => {
    const { container } = setup({
      users: null,
      avatarMapped: {
        type: null,
        picture: 'picture.jpg',
        total: 1,
        remainingHours: 1,
      },
    })

    expect(container).toBeInTheDocument()
  })
})
