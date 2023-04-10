import { fireEvent, render } from '@testing-library/react'
import { ModalCollaboratorMessage } from './ModalCollaboratorMessage'

const setup = (mock = {}) => render(<ModalCollaboratorMessage translations={{}} {...mock} />)

describe('<ModalCollaboratorMessage />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document when typeMessage is 1', () => {
    const { container } = setup({
      typeMenssage: 1,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should call onContinue function when accept button is clicked', () => {
    const onContinueMock = jest.fn()
    const { getByText } = setup({
      onContinue: onContinueMock,
      translations: {
        continue: 'aceptar',
      },
    })
    const button = getByText('aceptar')

    fireEvent.click(button)

    expect(onContinueMock).toHaveBeenCalled()
  })

  test('Should call onCancel function when cancel button is clicked', () => {
    const onCancelMock = jest.fn()
    const { getByText } = setup({
      onCancel: onCancelMock,
      typeMenssage: 1,
      translations: {
        cancel: 'cancelar',
      },
    })

    const button = getByText('cancelar')

    fireEvent.click(button)

    expect(onCancelMock).toHaveBeenCalled()
  })

  test('Should not call onContinue function when checkbox is clicked', () => {
    const onContinueMock = jest.fn()
    const { container } = setup({
      onContinue: onContinueMock,
    })
    const checkbox = container.querySelector('input[type=checkbox]')

    fireEvent.click(checkbox)

    expect(onContinueMock).toHaveBeenCalledTimes(0)
  })
})
