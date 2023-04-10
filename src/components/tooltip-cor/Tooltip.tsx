import { ReactElement, useState } from 'react'
import { TooltipProps } from './Tooltip.interface'
import { SvgIcon } from '../svg-icon/SvgIcon'
// Styles
import { SCWrapperTooltip, SCTooltip } from './style'
// Constants
const DEFAULT_DELAY = 300
const DEFAULT_ZINDEX = 100
const DEFAULT_MAX_WIDTH = '198'
const DEFAULT_POSITION = 'top'

export function Tooltip({
  delay = DEFAULT_DELAY,
  place = DEFAULT_POSITION,
  maxWidth = DEFAULT_MAX_WIDTH,
  zIndex = DEFAULT_ZINDEX,
  content,
  children,
  icon = '',
  iconClass = '',
}: TooltipProps): ReactElement {
  let timeout
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <SCWrapperTooltip onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children || (!!icon && <SvgIcon iconName={icon} newClass={iconClass} />)}
      {active && (
        <SCTooltip place={place} maxWidth={maxWidth} zIndex={zIndex}>
          {content}
        </SCTooltip>
      )}
    </SCWrapperTooltip>
  )
}
