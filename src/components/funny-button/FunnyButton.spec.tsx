import { cleanup, render } from '@testing-library/react'
import { FunnyButton } from './FunnyButton'

const setup = (mock = {}) => render(<FunnyButton {...mock} />)

describe('<FunnyButton />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with tooltip', () => {
    const { container } = setup({
      active: true,
      withTooltip: true,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with different sizes', () => {
    const sizes = ['large', 'medium', 'small']

    sizes.forEach(size => {
      const { container } = setup({
        size,
      })

      expect(container).toBeInTheDocument()

      cleanup()
    })
  })
})
