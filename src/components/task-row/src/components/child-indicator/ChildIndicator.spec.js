import { fireEvent, render } from '@testing-library/react'
import { ChildIndicator } from './index'

const setup = (mock = {}) => render(<ChildIndicator {...mock} />)

describe('<ChildIndicator />', () => {
  test('should render button component correctly', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })

  test('should call openTaskPanel when container is clicked', () => {
    const openTaskPanelMock = jest.fn()
    const { getByTestId } = setup({
      openTaskPanel: openTaskPanelMock,
    })
    const button = getByTestId('open-taskpanel-row')

    fireEvent.click(button)

    expect(openTaskPanelMock).toHaveBeenCalled()
  })

  test('should call getSubtasks when indicator is clicked', () => {
    const getSubTasksMock = jest.fn()
    const { getByText } = setup({
      getSubTasks: getSubTasksMock,
    })
    const indicator = getByText('sub_tasks')

    fireEvent.click(indicator)

    expect(getSubTasksMock).toHaveBeenCalled()
  })
})
