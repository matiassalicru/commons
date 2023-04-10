import { fireEvent, render } from '@testing-library/react'
import { NotificationsButton } from './NotificationsButton'

const setup = (mock = {}) => render(<NotificationsButton {...mock} />)

describe('<NotificationsButton />', () => {
  test('Should be in the document', () => {
    const { container } = setup({
      notifications: {
        action: () => {
          console.log('Test 1 clicked')
        },
        badge: {
          label: '8',
          color: 'error',
        },
        show: true,
      },
    })

    expect(container).toBeInTheDocument()
  })

  test('Should trigger "action" method', () => {
    const onClickMock = jest.fn()
    const { container } = setup({
      notifications: {
        action: onClickMock,
        badge: {
          label: '8',
          color: 'error',
        },
        show: true,
      },
    })
    const component = container.querySelector('button') as HTMLElement
    fireEvent.click(component)

    expect(onClickMock).toHaveBeenCalled()
  })
})
