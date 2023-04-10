import { render } from '@testing-library/react'
import { AlertPortal } from './AlertPortal'

const setup = (mock = {}) => render(<AlertPortal {...mock} />)

describe('<AlertPortal />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with icon', () => {
    const { container } = setup({
      icon: 'times',
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with custom position', () => {
    const { container } = setup({
      position: 'center-bottom',
    })

    expect(container).toBeInTheDocument()
  })
})
