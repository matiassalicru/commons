import { fireEvent, render } from '@testing-library/react'
import { MessageIcon } from './Message'

const setup = (mock = {}) => render(<MessageIcon totalUnreadMessages={0} handleClick={() => {}} {...mock} />)

describe('<Message />', () => {
  test('Should show totalUnreadMessages passed by prop', () => {
    const { getByTestId } = setup({
      totalUnreadMessages: 15,
    })

    const totalUnread = getByTestId('total-unread-message')

    expect(totalUnread).toHaveTextContent('15')
  })

  test('Should show +99 ', () => {
    const { getByTestId } = setup({
      totalUnreadMessages: 100,
    })

    const totalUnread = getByTestId('total-unread-message')

    expect(totalUnread).toHaveTextContent('+99')
  })

  test('Should trigger onClick function in the message button', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      handleClick: onClickMock,
    })

    const wrapper = getByTestId('icon-container')
    fireEvent.click(wrapper)
    expect(onClickMock).toHaveBeenCalled()
  })
})
