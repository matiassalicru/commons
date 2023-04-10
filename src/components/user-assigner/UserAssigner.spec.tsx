import { fireEvent, render } from '@testing-library/react'
import { UserAssigner } from './UserAssigner'

const setup = (mock = {}) => render(<UserAssigner fetchUsers={jest.fn()} {...mock} />)

describe('<UserAssigner />', () => {
  test('Should be in the document', () => {
    const variants = [
      {
        autoOpenModal: true,
      },
      {
        autoOpenModal: false,
      },
    ]

    variants.forEach(variant => {
      const { container } = setup(variant)

      expect(container).toBeInTheDocument()
    })
  })

  test('Should be in the document', () => {
    const onChangeMock = jest.fn()
    const { container, getByText } = setup({
      onChange: onChangeMock,
      contentId: 'dummy',
      showConfirmButton: true,
      translations: {
        confirm: 'confirmar',
      },
      initialUsers: [
        {
          id: '1',
          firstName: 'Michael',
        },
      ],
    })
    const avatar = container.querySelectorAll('svg')[0]

    fireEvent.click(avatar)

    const confirmButton = getByText('confirmar')

    fireEvent.click(confirmButton)

    expect(onChangeMock).toHaveBeenCalled()
  })
})
