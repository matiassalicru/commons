import { ReactElement, useRef } from 'react'
import { Tooltip } from '@projectcor/tooltip/lib'

// Global UI Component
import { SvgIcon } from '../svg-icon'
import { ButtonIconCustomProps } from './ButtonIconCustom.interface'

// Styles
import { SCButton } from './style'

/**
 * Custom button with icon.
 */
export function ButtonIconCustomWithTooltip({
  icon = 'times',
  size = 30,
  iconSize = 15,
  onHoverBackground = '',
  onHoverColor = '',
  onHoverBorder = '',
  radius = 'circle',
  borderSize = 0,
  borderColor = '',
  background = '',
  color = '',
  onClikAction = () => {
    // Click action default button
  },
  wordingTip = '',
  enabled = true,
  place = 'top',
  dataTestId = 'times',
  dataRobotId = '',
  customPointer = '',
  customStyleTooltip = null,
  isInactiveClient = false,
}: ButtonIconCustomProps): ReactElement {
  const BUTTON_REF = useRef(null)

  /**
   * Ejecuto handle del click y envio ref del botón.
   * Envío la ref ya que puede ser necesario para hacer el disable del botón después del click.
   */
  const handleClick = event => {
    onClikAction(BUTTON_REF, event)
  }

  return (
    <Tooltip title={wordingTip} placement={place} styles={customStyleTooltip}>
      <SCButton
        ref={BUTTON_REF}
        size={size}
        iconSize={iconSize}
        onClick={handleClick}
        backgroundHover={onHoverBackground}
        colorHover={onHoverColor}
        borderHover={onHoverBorder}
        radius={radius}
        borderSize={borderSize}
        borderColor={borderColor}
        background={background}
        color={color}
        role="button"
        aria-label="icon"
        enabled={enabled}
        data-testid={dataTestId}
        data-robot-id={dataRobotId}
        customPointer={customPointer}
        isInactiveClient={isInactiveClient}
      >
        <SvgIcon iconName={icon} />
      </SCButton>
    </Tooltip>
  )
}
