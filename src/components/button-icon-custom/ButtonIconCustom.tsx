import { ReactElement, useRef } from 'react'
import ReactTooltip from 'react-tooltip'
// Global UI Component
import { SvgIcon } from '../svg-icon'
import { ButtonIconCustomProps } from './ButtonIconCustom.interface'
// Styles
import { SCButton } from './style'

/**
 * Custom button with icon.
 */
export function ButtonIconCustom({
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
  onHoverAction = () => {
    // Hover action default button
  },
  forTooltip = '',
  withTip = false,
  wordingTip = '',
  enabled = true,
  place = 'top',
  dataTestId = 'times',
  dataRobotId = '',
  htmlMode = false,
  custom = '',
  customPointer = '',
  onTooltipOpen = () => null,
  onTooltipClose = () => null,
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

  const handleHover = event => {
    onHoverAction(BUTTON_REF, event)
  }

  return (
    <>
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
        data-tip={wordingTip}
        data-for={forTooltip}
        enabled={enabled}
        data-testid={dataTestId}
        data-robot-id={dataRobotId}
        customPointer={customPointer}
        onMouseOver={handleHover}
        isInactiveClient={isInactiveClient}
      >
        <SvgIcon iconName={icon} />
      </SCButton>
      {/* remplazar este tooltip */}
      {withTip && (
        <ReactTooltip
          className={`cor-tooltip${custom}`}
          effect="solid"
          delayShow={200}
          id={forTooltip}
          place={place}
          html={htmlMode}
          afterShow={onTooltipOpen}
          afterHide={onTooltipClose}
        />
      )}
    </>
  )
}
