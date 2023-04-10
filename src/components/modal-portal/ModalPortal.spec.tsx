import { fireEvent, render } from '@testing-library/react'
import { ModalPortal } from './ModalPortal'

beforeAll(() => {
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'root')
  document.body.appendChild(newDiv)
})

const setup = (mock = {}) =>
  render(
    <ModalPortal
      title=""
      variant=""
      closeModal={() => {
        // default function
      }}
      elementId="root"
      translations={{
        accept: undefined,
        cancel: undefined,
      }}
      clickButtonCancel={() => {
        // default function
      }}
      clickButtonAccept={() => {
        // default function
      }}
      showAcceptButton
      {...mock}
    />
  )

describe('<ModalPortal />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should call clickButtonAccept function when accept button is clicked', () => {
    const clickButtonAcceptMock = jest.fn()
    const { getByText } = setup({
      titleAccept: 'aceptar',
      clickButtonAccept: clickButtonAcceptMock,
    })

    const acceptButton = getByText('aceptar')

    fireEvent.click(acceptButton)

    expect(clickButtonAcceptMock).toHaveBeenCalled()
  })

  test('Should not call clickButtonAccept function when accept button is clicked and disabled is true', () => {
    const clickButtonAcceptMock = jest.fn()
    const { getByText } = setup({
      titleAccept: 'aceptar',
      clickButtonAccept: clickButtonAcceptMock,
      acceptDisabled: true,
    })

    const acceptButton = getByText('aceptar')

    fireEvent.click(acceptButton)

    expect(clickButtonAcceptMock).toHaveBeenCalledTimes(0)
  })

  test('Should call closeModal function when esq key is clicked', () => {
    const closeModalMock = jest.fn()
    const { container } = setup({
      closeModal: closeModalMock,
    })

    fireEvent.keyDown(container, {
      key: 'ESCAPE',
    })
    fireEvent.keyDown(container, {
      keyCode: 27,
    })

    expect(closeModalMock).toHaveBeenCalled()
  })

  test('Should call clickButtonClose function when the button "X" is clicked', () => {
    const closeModalMock = jest.fn()
    const { getByTestId } = setup({
      showCloseButton: true,
      clickButtonClose: closeModalMock,
    })

    fireEvent.click(getByTestId('close'))
    expect(closeModalMock).toHaveBeenCalled()
  })
})
