import { waitFor, fireEvent, render } from '@testing-library/react'
import { UserAssignerMoreUsers } from './UserAssignerMoreUsers'

const setup = (mock = {}) =>
  render(
    <UserAssignerMoreUsers
      translations={{}}
      users={[
        {
          id: '1',
          picture: 'picture.jpg',
          firstName: 'Michael',
          lastName: 'Scott',
        },
      ]}
      {...mock}
    />
  )

describe('<UserAssignerMoreUsers />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when tooltip is enabled', () => {
    const { container } = setup()
    const component = container.querySelectorAll('div')[0]

    fireEvent.mouseEnter(component)

    expect(container).toBeInTheDocument()
  })

  test('Should show user avatar when tooltip is enabled and hidden when mouseleave on component', async () => {
    const { container } = setup()
    const component = container.querySelectorAll('div')[0]

    fireEvent.mouseEnter(component)

    const userAvatar = container.querySelector('img')

    expect(userAvatar).toBeInTheDocument()

    fireEvent.mouseLeave(component)

    await waitFor(() => expect(userAvatar).not.toBeInTheDocument())
  })
})
