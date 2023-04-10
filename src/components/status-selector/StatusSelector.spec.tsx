import { fireEvent, render } from '@testing-library/react'
import { StatusSelector } from './StatusSelector'

const setup = (mock = {}) => render(<StatusSelector currentStatus="en_proceso" {...mock} />)

describe('<StatusSelector />', () => {
  test('Should be in the document when showList is enabled', () => {
    const { container } = setup({
      ableToEdit: true,
    })
    const component = container.querySelectorAll('div')[0]

    fireEvent.mouseEnter(component)

    const status = container.querySelectorAll('div')[1]

    expect(status).toBeInTheDocument()

    fireEvent.mouseLeave(component)

    expect(status).not.toBeInTheDocument()
  })
})
