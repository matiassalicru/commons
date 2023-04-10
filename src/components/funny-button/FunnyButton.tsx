import { ReactElement } from 'react'
import ReactTooltip from 'react-tooltip'
// Global UI Component
import { SvgIcon } from '../svg-icon'
// Styles
import { SCButton } from './style'
// Interface
import { FunnyButtonProps, Size } from './FunnyButton.inteface'

const defaultProps = {
  active: false,
  size: Size.small,
  onClikAction: () => {
    // default function
  },
  icon: 'paper-plane',
  withTooltip: false,
} as FunnyButtonProps

export function FunnyButton({
  active,
  onClikAction,
  size,
  icon,
  withTooltip,
  wordingTooltip,
  forTooltip,
  place,
}: FunnyButtonProps): ReactElement {
  return (
    <>
      <SCButton
        isActive={active}
        size={size}
        onClick={onClikAction}
        whileTap={{ scale: active ? 0.9 : 1 }}
        data-tip={wordingTooltip}
        data-for={forTooltip}
        isPlane={icon === 'paper-plane'}
      >
        <SvgIcon iconName={icon} />
      </SCButton>
      {withTooltip && active && (
        <ReactTooltip className="cor-tooltip" effect="solid" delayShow={300} id={forTooltip} place={place} />
      )}
    </>
  )
}

FunnyButton.defaultProps = defaultProps
