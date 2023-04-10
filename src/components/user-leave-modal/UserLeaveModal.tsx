import { ReactElement } from 'react'
import { Checkbox } from '@projectcor/checkbox/lib'
import { ModalPortal } from '../modal-portal'
import { SCWrapperCheckbox } from './style'
import { UserLeaveModalProps } from './UserLeaveModal.interface'

export const UserLeaveModal = ({
  title,
  textContent,
  clickButtonCancel,
  clickButtonAccept,
  titleAccept,
  titleCancel,
  handleChangeCheck,
  checkValue,
  labelCheckbox,
}: UserLeaveModalProps): ReactElement => {
  const modalTranslations = {
    cancel: titleCancel,
    accept: titleAccept,
  }

  return (
    <ModalPortal
      variant="normal"
      elementId="modals-portal"
      title={title}
      maxWidth="600px"
      textContent={textContent}
      clickButtonCancel={clickButtonCancel}
      clickButtonAccept={clickButtonAccept}
      translations={modalTranslations}
      closeModal={() => undefined}
    >
      <SCWrapperCheckbox>
        <Checkbox checked={checkValue} onChange={handleChangeCheck} />
        {labelCheckbox}
      </SCWrapperCheckbox>
    </ModalPortal>
  )
}
