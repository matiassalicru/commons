import { render } from '@testing-library/react'
import { ShortcutButton } from './ShortcutButton'

const setup = (mock = {}) => render(<ShortcutButton {...mock} />)

describe('<ShortcutButton />', () => {
  test('Should be in the document', () => {
    const { container } = setup({
      items: [
        {
          label: 'Cliente',
          icon: 'FileContract',
          action: () => {
            alert('Test 1 clicked')
          },
          show: true,
        },
        {
          label: 'Proyecto',
          icon: 'AddressBook',
          action: () => {
            alert('Test 2 clicked')
          },
          show: true,
        },
        {
          label: 'Contacto',
          icon: 'Users',
          action: () => {
            alert('Test 3 clicked')
          },
          show: false,
        },
      ],
    })

    expect(container).toBeInTheDocument()
  })
})

describe('<ShortcutButton />', () => {
  test('Should be in the document - Hidden button', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
