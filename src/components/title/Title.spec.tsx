import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render } from '@testing-library/react'
import { Title } from './Title'

const setup = (mock = {}) =>
  render(
    <Router>
      <Title
        content=""
        entityId=""
        tooltip="Text"
        ableToEdit={false}
        showSubtaskIcon={false}
        changeTitle={() => {
          // default function
        }}
        onStartEdition={event => {
          console.info('start editing title target: ', event?.target)
        }}
        onCloseEdition={event => {
          console.info('start editing title target: ', event?.target)
        }}
        {...mock}
      />
    </Router>
  )

describe('<Title />', () => {
  test('Should be in the document', () => {
    const { container } = setup({
      isRouter: true,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should show subtask icon', () => {
    setup({ isRouter: false, showSubtaskIcon: true })

    const subtaskIcon = document.querySelector('#SubtaskIcon')
    expect(subtaskIcon).toBeInTheDocument()
  })

  test('Should not show subtask icon', () => {
    setup({ isRouter: false, showSubtaskIcon: false })

    const subtaskIcon = document.querySelector('#SubtaskIcon')
    expect(subtaskIcon).not.toBeInTheDocument()
  })

  test('Should be in the document when edit mode is enabled', () => {
    const { container } = setup({
      ableToEdit: true,
      tooltip: true,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should show input when edit button is clicked', () => {
    const { container } = setup({
      ableToEdit: true,
      tooltip: true,
    })

    const button = container.querySelector('svg')
    if (button) fireEvent.click(button)

    const input = container.querySelector('input')

    expect(input).toBeInTheDocument()
  })

  test('Should call changeTitle when input is blur', () => {
    const changeTitleMock = jest.fn()
    const { getByTestId, queryByLabelText } = setup({
      changeTitle: changeTitleMock,
      ableToEdit: true,
      tooltip: true,
    })

    const button = getByTestId('pencil-edit')

    if (button) fireEvent.click(button)

    const input = queryByLabelText('input-edit')

    if (input) {
      fireEvent.change(input, {
        target: {
          value: 'input filled',
        },
      })

      fireEvent.blur(input)
      expect(changeTitleMock).toHaveBeenCalledTimes(1)
    }
  })

  test('Should not call changeTitle when input is blur and value is invalid', () => {
    const changeTitleMock = jest.fn()
    const { getByTestId, queryByLabelText } = setup({
      changeTitle: changeTitleMock,
      ableToEdit: true,
      tooltip: true,
    })

    const button = getByTestId('pencil-edit')

    if (button) fireEvent.click(button)

    const input = queryByLabelText('input-edit')

    if (input) {
      fireEvent.change(input, {
        target: {
          value: null,
        },
      })

      fireEvent.blur(input)
    }

    expect(changeTitleMock).toHaveBeenCalledTimes(0)
  })

  test('Should set default input value when press escape when input is focus', () => {
    const { getByTestId, queryByLabelText, container } = setup({
      ableToEdit: true,
      tooltip: true,
    })

    const button = getByTestId('pencil-edit')

    if (button) fireEvent.click(button)

    const input = queryByLabelText('input-edit')

    if (input) {
      fireEvent.keyDown(input, {
        key: 'Escape',
      })
    }

    const inputValue = container.querySelector('input')
    expect(inputValue?.value).toBe('')
  })
})
