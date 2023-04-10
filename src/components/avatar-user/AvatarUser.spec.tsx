import { render, cleanup } from '@testing-library/react'
import { AvatarUser } from './AvatarUser'
import { AvatarSize, AvatarUserProps } from './AvatarUser.interface'

const setup = (mock: AvatarUserProps = { firstName: '', lastName: '', picture: '', size: AvatarSize.small }) =>
  render(<AvatarUser {...mock} />)

describe('<AvatarUser />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when first name and last name exists', () => {
    const { container } = setup({
      firstName: 'dummy firsname',
      lastName: 'dummy lastname',
      picture: 'dummy picture',
      size: AvatarSize.small,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when first name and last name exists', () => {
    const { getByAltText } = setup({
      picture: 'error picture',
      firstName: 'John',
      lastName: 'Doe',
      size: AvatarSize.small,
    })

    const image = getByAltText('John Doe')

    expect(image).toBeInTheDocument()
  })

  test('Should be in the document when sizes provided', () => {
    Object.values(AvatarSize).forEach(size => {
      const { container } = setup({
        firstName: 'size test',
        lastName: 'size test',
        picture: 'size test',
        size,
      })

      expect(container).toBeInTheDocument()

      cleanup()
    })
  })
})
