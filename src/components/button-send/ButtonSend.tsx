import { useRef, useLayoutEffect, ReactElement } from 'react'
// Styles
import { SCButton, SCSpinner, SCWrapperSpinner } from './style'
// Interface
import { ButtonSendProps } from './ButtonSend.interface'

const defaultProps = {
  sending: true,
  handleClick: () => {
    // Click action default button
  },
  isDisabed: false,
} as ButtonSendProps

function Loader() {
  return (
    <SCWrapperSpinner initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SCSpinner />
    </SCWrapperSpinner>
  )
}

export function ButtonSend({ sending, handleClick, isDisabed, children }: ButtonSendProps): ReactElement {
  const BUTTON_REF = useRef<HTMLButtonElement>(null)

  const clickButton = () => {
    handleClick(BUTTON_REF)
  }

  // Habilito y deshabilito botón para guardar.
  useLayoutEffect(() => {
    if (isDisabed && !!BUTTON_REF.current) BUTTON_REF.current.setAttribute('disabled', 'disabled')
    else if (BUTTON_REF?.current) BUTTON_REF.current.removeAttribute('disabled')
  }, [isDisabed])

  return (
    <SCButton onClick={clickButton} ref={BUTTON_REF} whileTap={{ scale: sending ? 1 : 0.9 }}>
      {sending && <Loader />}
      {children}
    </SCButton>
  )
}

ButtonSend.defaultProps = defaultProps
