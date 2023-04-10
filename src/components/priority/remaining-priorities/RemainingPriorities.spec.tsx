import { fireEvent, render } from '@testing-library/react'
import { RemainingPriorities } from './RemainingPriorities'
import { CONFING_PRIORITIES } from '../constant'

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

const setup = (mock = {}) =>
  render(
    <RemainingPriorities
      priorities={[
        CONFING_PRIORITIES['3'].priority,
        CONFING_PRIORITIES['2'].priority,
        CONFING_PRIORITIES['1'].priority,
        CONFING_PRIORITIES['0'].priority,
      ]}
      translations={{}}
      {...mock}
    />
  )

describe('<RemainingPriorities />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should call updatePriority function hen item list is clicked', () => {
    const updatePriorityMock = jest.fn()
    const { container } = setup({
      updatePriority: updatePriorityMock,
    })
    const item = container.querySelectorAll('li')[0]

    fireEvent.click(item)

    expect(updatePriorityMock).toHaveBeenCalled()
  })
})
