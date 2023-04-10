import { ReactElement, useState } from 'react'
// Types
import { TrialButtonProps } from './TrialButton.interface'
// Components
import { ModalPortal } from '../modal-portal'
// Styles
import { SCButton, SCLabel } from './style'

export const LABEL_TEST_ID = 'trial_button_test_id'

const modalPortalStaticProps = { showCancelButton: false, showCloseButton: true, variant: 'normal', maxWidth: '600px' }

export function TrialButton({
  title,
  onClickAction = () => {
    // do nothing
  },
  isInteractive = true,
  captionTextContent = '',
  modalTitle = '',
  modalTextContent = '',
  modalConfirmButtonLabel = '',
  idToRenderModal = 'modal-portal',
  showConfirmButton = true,
}: TrialButtonProps): ReactElement {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    isInteractive && setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleConfirm = () => {
    onClickAction()
    setShowModal(false)
  }

  const translations = {
    accept: modalConfirmButtonLabel,
  }

  return (
    <div>
      <SCButton onClick={handleClick} isInteractive={isInteractive}>
        {title}
      </SCButton>
      {captionTextContent && <SCLabel data-testid={LABEL_TEST_ID}>{captionTextContent}</SCLabel>}
      {showModal && (
        <ModalPortal
          closeModal={handleCloseModal}
          title={modalTitle}
          textContent={modalTextContent}
          translations={translations}
          elementId={idToRenderModal}
          clickButtonCancel={handleCloseModal}
          clickButtonAccept={handleConfirm}
          clickButtonClose={handleCloseModal}
          showAcceptButton={showConfirmButton}
          {...modalPortalStaticProps}
        />
      )}
    </div>
  )
}
