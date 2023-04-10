import { ReactElement } from 'react'
// Interface
import { ButtonCustomProps } from './ButtonCustom.interface'
// Styles
import { SCButtonCustom } from './style'

export function ButtonCustom({
  children,
  color = '#ffffff',
  backgroundColor = '#0094ca',
  fontSize = '14px',
  minWidth = 'auto',
  minHeight = 'auto',
  padding = '9px 12px',
  borderRadius = '3px',
  fontWeight = '500',
  onClick = () => {
    // do nothing
  },
  disabled = false,
  hoverBackground = '#0088b9',
  hoverColor = '#ffffff',
  boxShadow = 'none',
  textShadow = 'none',
  dataTestIdButton,
  outlineColor = 'transparent',
  hoverOutlineColor = 'transparent',
  idForExperience,
  variantButton = '',
  variantSize = '',
}: ButtonCustomProps): ReactElement {
  const ID_EXPERIENCE = idForExperience ? { id: idForExperience } : null

  const ID_TEST = dataTestIdButton ? { 'data-testid': dataTestIdButton } : null

  const buttonStylesProps = {
    color,
    backgroundColor,
    fontSize,
    minWidth,
    minHeight,
    padding,
    borderRadius,
    fontWeight,
    disabled,
    hoverBackground,
    hoverColor,
    boxShadow,
    textShadow,
    outlineColor,
    hoverOutlineColor,
    variantButton,
    variantSize,
  }

  return (
    <SCButtonCustom onClick={onClick} {...ID_TEST} {...ID_EXPERIENCE} {...buttonStylesProps}>
      {children}
    </SCButtonCustom>
  )
}
