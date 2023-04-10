import { FunctionComponent, ReactElement } from 'react'

// Styles
import { SCIcon } from './styles'

// Types
import { StatusIconType } from './Status.interface'

export const Status: FunctionComponent<StatusIconType> = ({ color }): ReactElement => {
  return <SCIcon color={color} />
}
