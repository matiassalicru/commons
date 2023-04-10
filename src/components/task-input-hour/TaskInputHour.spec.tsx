import { fireEvent, render, waitFor } from '@testing-library/react'
import { TaskInputHour } from './TaskInputHour'
import { StatusType } from './TaskInputHour.interface'

const taskStatus = ['nueva', 'en_proceso', 'estancada', 'finalizada']
const componentProps = {
  onClickTask: () => null,
  onClickTaskRow: () => null,
  wordings: {
    buttonEdit: 'buttonEdit',
    buttonAccept: 'buttonEdit',
    buttonDecline: 'buttonDecline',
    buttonDelete: 'buttonDelete',
    trackedHourInactiveClient: 'trackedHourInactiveClient',
  },
}

const TestComponent = props => <TaskInputHour {...componentProps} {...props} />

describe('<TaskInputHour/>', () => {
  test('should render TaskInputHourComponent', () => {
    const { container } = render(<TestComponent />)
    expect(container).toBeInTheDocument()
  })
  test('Should call click action when click it the task', () => {
    const onClickTaskMock = jest.fn()

    const newProp = {
      onClickTask: onClickTaskMock(),
    }
    const { container } = render(<TestComponent {...newProp} />)

    const taskWrapper = container.firstChild?.firstChild as Node
    const click = fireEvent.click(taskWrapper)

    expect(click).toBeTruthy()
    expect(onClickTaskMock).toHaveBeenCalled()
  })

  test('Should call click action when click it the taskRow', () => {
    const onClickTaskRowMock = jest.fn()
    const taskNameMock = 'TaskInputHour'
    const newProp = { onClickTaskRow: onClickTaskRowMock(), taskName: taskNameMock }
    const { getAllByText } = render(<TestComponent {...newProp} />)

    const [taskTitle] = getAllByText(taskNameMock)

    fireEvent.click(taskTitle)

    expect(taskTitle).toBeInTheDocument()
    expect(onClickTaskRowMock).toHaveBeenCalled()
  })

  test('Should changing status will change borders styles', () => {
    const { rerender, container } = render(<TestComponent />)
    taskStatus.forEach(status => {
      const props = { status }
      rerender(<TestComponent {...props} />)

      const wrapper = container.firstChild

      waitFor(() => expect(wrapper).toHaveStyle(`border: 4px solid ${StatusType[status]}`))
    })
  })
})
