import { ReactElement } from 'react'
// styles
import { SCButton } from './style'
// Interface
import { ButtonProps } from './button.interface'

const defaultProps = {
  text: 'Aceptar',
  onClickAction: () => {
    // Click action default button
  },
  variant: 'primary',
  disabled: false,
} as ButtonProps

export const Button = ({ text, onClickAction, variant, disabled }: ButtonProps): ReactElement => {
  const handleOnClickAction = () => {
    !disabled && onClickAction()
  }

  return (
    <SCButton typeVariant={variant || 'primary'} onClick={handleOnClickAction} disabled={disabled}>
      {text}
    </SCButton>
  )
}

Button.defaultProps = defaultProps
