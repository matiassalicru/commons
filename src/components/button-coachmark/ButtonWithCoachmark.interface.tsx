import { ReactElement } from 'react'

export interface ButtonWithCoachmarkProps {
  children: ReactElement | ReactElement[]
  description?: string
  buttonSize?: string
  buttonVariant?: string
  iconOnly?: boolean
  success?: boolean
  error?: boolean
  onClickButton: (event?) => void
  disableInteractive?: boolean
  disabledComments?: boolean
  isInactiveClient?: boolean
  className?: string
}
