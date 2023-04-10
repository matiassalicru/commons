import { render } from '@testing-library/react'
import { TinyLink } from './TinyLink'

const setup = (mock = {}) => render(<TinyLink path="https://projectcor.com" {...mock} />)

describe('<TinyLink />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should throw error when path is invalid', () => {
    try {
      setup({
        path: 'invalid path',
      })
    } catch (error) {
      expect(error).toThrow('Error: Invalid url')
    }
  })
})
