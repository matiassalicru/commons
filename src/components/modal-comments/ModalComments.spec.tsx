import { fireEvent, render, screen } from '@testing-library/react'
import { ModalComments } from './ModalComments'
import { ModalCommentsProps } from './ModalComments.interface'

const mockCreateComment = (phraseQty: number) => Array(phraseQty).join('a')
const componentProps = {
  textButtonCancel: 'Cancel',
  textButtonAccept: 'Accept',
  messageError: 'Error',
  title: 'notas storybook',
  comment: 'Comment to textarea',
  modalCommentPlaceholder: 'Placeholder',
  onAcceptAction: () => null,
  onCancelAction: () => null,
  setNewComment: () => null,
}

const MockComponent = (props: ModalCommentsProps) => <ModalComments {...props} />

describe('<ModalComments />', () => {
  test('Should show Component', () => {
    const { container } = render(<MockComponent {...componentProps} />)

    expect(container).toBeInTheDocument()
  })

  test('Should have title ', () => {
    const titleLabelMock = 'Title storybook'

    render(<MockComponent {...componentProps} title={titleLabelMock} />)

    expect(screen.getByText(titleLabelMock)).toBeInTheDocument()
  })

  test('Should have placeholder', () => {
    const placeholderMock = 'Placeholder modal comments'

    render(<MockComponent {...componentProps} modalCommentPlaceholder={placeholderMock} />)

    const textarea = screen.getByRole('textbox')

    expect(textarea.getAttribute('placeholder')).toEqual(placeholderMock)
  })

  test('Should show error message if prop comment length is higher than 5000', () => {
    const commentMock = mockCreateComment(5002)

    const messageErrorMock = 'Error storybook'

    render(<MockComponent {...componentProps} comment={commentMock} messageError={messageErrorMock} />)

    const errorComponent = screen.getByText(messageErrorMock)

    expect(errorComponent).toBeInTheDocument()
  })

  test('Should validate error message depending comment length', () => {
    const newValueTextarea = 'this is a text for textarea'
    const messageErrorMock = 'Error storybook'
    const event = {
      target: { value: 'test onChangeEvent' },
    }
    render(<MockComponent {...componentProps} comment={newValueTextarea} messageError={messageErrorMock} />)
    const textarea = screen.getByRole('textbox')

    expect(textarea.innerHTML).toBe(newValueTextarea)

    fireEvent.change(textarea, event)

    expect(textarea.innerHTML).toBe(event.target.value)

    fireEvent.change(textarea, { ...event, target: { value: mockCreateComment(5002) } })

    expect(screen.getByText(messageErrorMock)).toBeInTheDocument()

    fireEvent.change(textarea, { ...event, target: { value: mockCreateComment(10) } })

    expect(screen.queryByText(messageErrorMock)).toBeNull()
  })

  test('Should button Accept', () => {
    const titleButtonAcceptMock = 'Accept Storybook'

    const newProps = { textButtonAccept: titleButtonAcceptMock }
    render(<MockComponent {...componentProps} {...newProps} />)

    expect(screen.getByText(titleButtonAcceptMock)).toBeInTheDocument()
  })

  test('Should button Cancel', () => {
    const titleButtonCancelMock = 'Cancel Storybook'

    const newProps = { textButtonCancel: titleButtonCancelMock }
    render(<MockComponent {...componentProps} {...newProps} />)

    expect(screen.getByText(titleButtonCancelMock)).toBeInTheDocument()
  })

  test('Should call click event 1 time when clicking in a Cancel button', () => {
    const titleButtonCancelMock = 'Cancel Storybook'
    const onClickMock = jest.fn()
    const newProps = { textButtonCancel: titleButtonCancelMock, onCancelAction: onClickMock() }
    render(<MockComponent {...componentProps} {...newProps} />)

    fireEvent.click(screen.getByText(titleButtonCancelMock))

    expect(onClickMock).toHaveBeenCalled()
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
