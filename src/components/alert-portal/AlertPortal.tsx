import { ReactPortal, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'

// Global UI Component
import { SvgIcon } from '../svg-icon'
import { SpinnerLottie } from '../spinner-lottie/SpinnerLottie'
// Styles
import { SCWrapper, SCAlert, SCAlertRedirect } from './style'
// Interface
import { AlertPortalProps, VariantType, PositionType } from './AltertPortal.interface'

const OFFSET = 30
const TRANSITION = { duration: 0.5 }

const fromBottom = {
  initial: {
    opacity: 0,
    y: OFFSET,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...TRANSITION },
  },
  exit: {
    opacity: 0,
    y: OFFSET,
    transition: { ...TRANSITION },
  },
}

const fromRight = {
  initial: {
    opacity: 0,
    x: OFFSET,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { ...TRANSITION },
  },
  exit: {
    opacity: 0,
    x: OFFSET,
    transition: { ...TRANSITION },
  },
}

const defaultProps = {
  position: PositionType.centerBottom,
  text: '',
  variant: VariantType.success,
  icon: '',
  timeOut: 3500,
  onClose: () => {
    // Close function default prop.
  },
  idPortal: 'alerts-portal',
  spinner: false,
  withLink: { title: '', route: '' },
} as AlertPortalProps

const Alert = ({ position, text, variant, icon, timeOut, onClose, spinner, withLink }: AlertPortalProps) => {
  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, timeOut)
  }, [onClose, timeOut])

  const inPosition = position === PositionType.centerBottom ? fromBottom : fromRight
  const history = useHistory()

  const handleRedirect = useCallback(() => {
    if (withLink) history.push(withLink.route)
  }, [history, withLink])

  return (
    <SCWrapper position={position} data-testid="AlertPortalWrapper">
      <SCAlert initial="initial" animate="animate" exit="exit" variants={inPosition} variant={variant}>
        {icon && <SvgIcon iconName={icon} />}
        {spinner && <SpinnerLottie width={25} height={20} type="cor-grey" />}
        <span>{text}</span>
        <SCAlertRedirect onClick={handleRedirect}>{withLink ? withLink.title : ''}</SCAlertRedirect>
      </SCAlert>
    </SCWrapper>
  )
}

export function AlertPortal(props: AlertPortalProps): ReactPortal | null {
  const { idPortal } = props
  const selector = document.querySelector(`#${idPortal}`)
  return selector ? ReactDOM.createPortal(<Alert {...props} />, selector) : null
}

AlertPortal.defaultProps = defaultProps
