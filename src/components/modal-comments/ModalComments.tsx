import { ChangeEvent, useEffect, useState, FocusEvent, KeyboardEvent, ReactElement } from 'react'
import Colors from '@projectcor/theme/lib/base/colors'
import { CUButton as CustomButtom } from '@projectcor/button/lib/components/CUButton'
import { TitleMaker } from '../title-maker'
import { ModalCommentsProps } from './ModalComments.interface'
import { SCMCTextArea, SCMCWrapper, SCMCWrapperButton, SCMCMessageError } from './styles'

const MAX_CARACTERS = 5000
export const ModalComments = ({
  title,
  marginTitle = '0 0 4px 0',
  onAcceptAction,
  onCancelAction,
  textButtonAccept,
  textButtonCancel,
  messageError,
  comment,
  setNewComment,
  modalCommentPlaceholder,
  characterExceeded = () => null,
}: ModalCommentsProps): ReactElement => {
  const [textArea, setTextArea] = useState<string>('')
  const [errorExceededCharacters, setErrorExceededCharacters] = useState<boolean>(false)

  useEffect(() => {
    if (comment?.length > MAX_CARACTERS) {
      setErrorExceededCharacters(true)
      setTextArea(comment.slice(0, MAX_CARACTERS))
    } else {
      setErrorExceededCharacters(false)
      setTextArea(comment)
    }
  }, [comment])

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > MAX_CARACTERS) {
      setErrorExceededCharacters(true)
      characterExceeded()
      setTextArea(event.target.value.slice(0, MAX_CARACTERS))
      return
    }
    errorExceededCharacters && setErrorExceededCharacters(false)
    setTextArea(event.target.value)
  }

  const handleSetNewComment = (event: FocusEvent<HTMLInputElement>) => {
    setNewComment(event.target.value)
  }

  const handleAcceptComments = () => {
    onAcceptAction(textArea)
  }

  const handlePressCombiantionKeys = (event: KeyboardEvent<HTMLInputElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      setNewComment((event.target as HTMLInputElement).value)
      handleAcceptComments()
    }
  }

  const TITLE_COLOR = errorExceededCharacters ? Colors.error.main : Colors.grey[500]
  const BORDER_TEXTAREA = errorExceededCharacters ? Colors.error.main : Colors.transparent.main

  return (
    <SCMCWrapper onBlur={handleSetNewComment} onKeyDown={handlePressCombiantionKeys}>
      <TitleMaker text={title} textMargin={marginTitle} textColor={TITLE_COLOR} />
      <SCMCTextArea
        value={textArea}
        onChange={handleChangeTextArea}
        border={BORDER_TEXTAREA}
        autoFocus
        spellCheck={false}
        placeholder={modalCommentPlaceholder}
      />
      {errorExceededCharacters && <SCMCMessageError>{messageError}</SCMCMessageError>}
      <SCMCWrapperButton error={errorExceededCharacters}>
        <CustomButtom variant="text" size="medium" onClick={onCancelAction}>
          {textButtonCancel}
        </CustomButtom>
        <CustomButtom variant="contained" size="medium" onClick={handleAcceptComments}>
          {textButtonAccept}
        </CustomButtom>
      </SCMCWrapperButton>
    </SCMCWrapper>
  )
}
