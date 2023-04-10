export interface ModalCommentsProps {
  title: string
  marginTitle?: string
  onAcceptAction: (comment: string) => void
  onCancelAction: () => void
  textButtonCancel: string
  textButtonAccept: string
  messageError: string
  comment: string
  modalCommentPlaceholder: string
  setNewComment: (comment: string) => void
  characterExceeded?: () => void
}

export interface ModalCommentsStyleProps {
  border: string | null
  error: boolean
}
