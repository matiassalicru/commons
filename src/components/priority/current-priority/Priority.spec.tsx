import { fireEvent, render } from '@testing-library/react'
import { Priority } from './Priority'

jest.mock('react', () => {
  const originReact = jest.requireActual('react')
  const useRef = () => ({
    current: {
      contains: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    },
  })
  return {
    ...originReact,
    useRef,
  }
})

const setup = (mock = {}) => render(<Priority translations={{}} {...mock} />)

describe('<Priority />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with showList', () => {
    const { container } = setup({
      ableToEdit: true,
    })
    const icon = container.querySelector('svg')

    fireEvent.click(icon)

    const item = container.querySelectorAll('li')[0]

    fireEvent.click(item)

    expect(container).toBeInTheDocument()
  })
})
