import { ReactElement } from 'react'

// UI components
import { SvgIcon } from '../../../../../../svg-icon'

// Types
import { PriorityIconTypes } from './Priority.interface'

// Styles
import { SCIconWrapper } from './styles'

export const Priority = ({ iconSpecs }: PriorityIconTypes): ReactElement => {
  const { color, icon } = iconSpecs
  return (
    <SCIconWrapper color={color}>
      <SvgIcon iconName={icon} />
    </SCIconWrapper>
  )
}
