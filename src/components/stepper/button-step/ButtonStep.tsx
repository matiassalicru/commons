import { ReactElement } from 'react'
// Styles
import { SCContent } from './style'
// Interface
import { ButtonStepProps } from './ButtonStep.interface'
// Global components
import { SvgIcon } from '../../svg-icon'

export const ButtonStep = ({
  position,
  icon,
  title,
  onClickButton,
  testId,
  color,
  hoverColor,
}: ButtonStepProps): ReactElement => {
  return (
    <SCContent onClick={onClickButton} position={position} data-testid={testId} color={color} hoverColor={hoverColor}>
      <SvgIcon iconName={icon} />
      {title}
    </SCContent>
  )
}
