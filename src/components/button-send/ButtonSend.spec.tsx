import { render } from '@testing-library/react'
import { ButtonSend } from './ButtonSend'

jest.mock('react', () => {
  const originReact = jest.requireActual('react')
  const useRef = () => ({
    current: {
      setAttribute: jest.fn(),
      removeAttribute: jest.fn(),
    },
  })
  return {
    ...originReact,
    useRef,
  }
})

const setup = (mock = {}) => render(<ButtonSend {...mock}>dummy button</ButtonSend>)

describe('<ButtonSend />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when component is disabled', () => {
    const { container } = setup({
      isDisabed: true,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when sending is true', () => {
    const { container } = setup({
      sending: true,
    })

    expect(container).toBeInTheDocument()
  })
})
