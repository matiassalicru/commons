import { useRef, useEffect, ReactPortal } from 'react'
import ReactDOM from 'react-dom'
// UI Components
import parse from 'html-react-parser'
import { Button } from '../button'
// Styles
import { SCText, SCBody, SCTitle, SCFooter, SCHeader, SCContent, SCBackDrop, SCContentClose } from './style'
import { ModalPortalProps, VariantType } from './ModalPortal.interface'
import { SvgIcon } from '../svg-icon'

const backdrop = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const modalPortalId = 'modal-portal-commons'

const Modal = ({
  title,
  variant,
  children,
  titleAccept,
  titleCancel,
  textContent,
  translations = {},
  clickButtonAccept,
  clickButtonCancel,
  withMaxWidth = true,
  closeModal = () => {
    // default function
  },
  // TODO: cambiar valor por defecto a false, si no se pasa esta prop no deberia mostrar el boton
  showCancelButton = true,
  showAcceptButton = true,
  maxWidth,
  acceptDisabled = false,
  showCloseButton,
  clickButtonClose = () => {
    // default function
  },
  hidden = false,
}: ModalPortalProps) => {
  const content = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  const clickAccept = () => {
    clickButtonAccept()
  }

  const closeModalEsc = e => {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeModalEsc)

    return () => {
      document.removeEventListener('keydown', closeModalEsc)
    }
  }, [content])

  const handleClickBackDrop = event => {
    if (event.target === backdropRef?.current && event.target !== content?.current) {
      closeModal()
    }
  }

  return (
    <SCBackDrop
      onClick={handleClickBackDrop}
      initial="initial"
      animate="animate"
      exit="initial"
      variants={backdrop}
      ref={backdropRef}
      display={hidden ? 'none' : 'flex'}
    >
      <SCContent ref={content} withMaxWidth={withMaxWidth} maxWidth={maxWidth} id={modalPortalId}>
        {(!!title || showCloseButton) && (
          <SCHeader>
            <SCTitle variant={variant}>{title}</SCTitle>
            {showCloseButton && (
              <SCContentClose onClick={clickButtonClose} data-testid="close">
                <SvgIcon iconName="times" />
              </SCContentClose>
            )}
          </SCHeader>
        )}
        <SCBody>
          {textContent && <SCText>{parse(textContent)}</SCText>}
          {children}
        </SCBody>

        <SCFooter>
          {showCancelButton && (
            <Button
              text={titleCancel || translations?.cancel}
              onClickAction={clickButtonCancel}
              variant={VariantType.WHITE}
            />
          )}
          {showAcceptButton && (
            <Button text={titleAccept || translations?.accept} onClickAction={clickAccept} disabled={acceptDisabled} />
          )}
        </SCFooter>
      </SCContent>
    </SCBackDrop>
  )
}

export const ModalPortal = (props: ModalPortalProps): ReactPortal | null => {
  const { elementId } = props
  const defaultElementId = elementId !== '' ? elementId : 'modal-portal'
  const selector = elementId.includes('#')
    ? document.querySelector(defaultElementId)
    : document.querySelector(`#${defaultElementId}`)
  return selector ? ReactDOM.createPortal(<Modal {...props} />, selector) : null
}
