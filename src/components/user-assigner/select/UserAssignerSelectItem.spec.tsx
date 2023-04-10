import { fireEvent, render } from '@testing-library/react'
import { UserAssignerSelectItem } from './UserAssignerSelectItem'

const setup = (mock = {}) =>
  render(
    <UserAssignerSelectItem
      onSelect={f => f}
      user={{
        id: '1',
        firstName: 'Michael',
        lastName: 'Scott',
        roleId: 6,
      }}
      translations={{}}
      {...mock}
    />
  )

describe('<UserAssignerSelectItem />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with showMe prop enabled', () => {
    const { container } = setup({
      showMe: true,
      translations: {
        me_option: 'option',
      },
    })

    expect(container).toBeInTheDocument()
  })

  test('Should call onSelect function when component is clicked', () => {
    const onSelectMock = jest.fn()
    const { container } = setup({
      onSelect: onSelectMock,
      showMe: true,
      translations: {
        me_option: 'option',
      },
      showRoleClient: true,
    })
    const component = container.querySelector('li') as HTMLElement

    fireEvent.click(component)

    expect(onSelectMock).toHaveBeenCalled()
  })
})
