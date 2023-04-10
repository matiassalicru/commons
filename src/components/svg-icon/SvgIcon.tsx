import { ReactElement } from 'react'
// Styles
import { SCWrapperIcon, SCSvg } from './style'
import { SvgIconProps } from './SvgIcon.interface'

export function SvgIcon({ newClass = '', iconName = '', iconSize = 1 }: SvgIconProps): ReactElement {
  return (
    <SCWrapperIcon className={newClass}>
      <SCSvg iconSize={iconSize}>
        <use xlinkHref={`#i-${iconName}`} />
      </SCSvg>
    </SCWrapperIcon>
  )
}
