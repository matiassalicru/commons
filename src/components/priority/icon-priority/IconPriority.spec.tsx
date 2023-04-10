import { fireEvent, render } from '@testing-library/react'
import { IconPriority } from './IconPriority'

const setup = (mock = {}) => render(<IconPriority translations={{}} {...mock} />)

describe('<Priority />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when tooltip is enabled', () => {
    const { container } = setup({
      isTooltip: true,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should call currentPriorityClick when icon is clicked', () => {
    const currentPriorityClickMock = jest.fn()
    const { container } = setup({
      currentPriorityClick: currentPriorityClickMock,
    })

    const icon = container.querySelector('svg')

    fireEvent.click(icon)

    expect(currentPriorityClickMock).toHaveBeenCalledTimes(1)
  })

  test('Should not call currentPriorityClick when icon is clicked and currentPriority is null', () => {
    const currentPriorityClickMock = null
    const { container } = setup({
      currentPriorityClick: currentPriorityClickMock,
    })

    const icon = container.querySelector('svg')

    fireEvent.click(icon)

    expect(container).toBeInTheDocument()
  })
})
