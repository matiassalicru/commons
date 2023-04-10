import { ReactElement } from 'react'
import { TrackTime } from '@projectcor/icons/lib/components/TrackTime'
import { Travel } from '@projectcor/icons/lib/components/Travel'
import { Baby } from '@projectcor/icons/lib/components/Baby'
import { Marriage } from '@projectcor/icons/lib/components/Marriage'
import { Ribbon } from '@projectcor/icons/lib/components/Ribbon'
import { Book } from '@projectcor/icons/lib/components/Book'
import { Dolly } from '@projectcor/icons/lib/components/Dolly'
import { Syringe } from '@projectcor/icons/lib/components/Syringe'
import { Stam } from '@projectcor/icons/lib/components/Stam'
import { Futbol } from '@projectcor/icons/lib/components/Futbol'
import { Graduation } from '@projectcor/icons/lib/components/Graduation'
import { Date } from '@projectcor/icons/lib/components/Date'
import { Loveseat } from '@projectcor/icons/lib/components/Loveseat'
import { UserLeaveIconProps } from './UserLeaveIcon.interface'

export const UserLeaveIcon = ({ typeCode, width = '14px', height = '14px' }: UserLeaveIconProps): ReactElement => {
  const iconProps = {
    width,
    height,
    variant: 'solid',
  }
  const licensesTypesIcons = {
    UL1: <Travel {...iconProps} />,
    UL2: <Baby {...iconProps} />,
    UL3: <Marriage {...iconProps} />,
    UL4: <Ribbon {...iconProps} />,
    UL5: <Book {...iconProps} />,
    UL6: <Dolly {...iconProps} />,
    UL7: <Syringe {...iconProps} />,
    UL8: <Stam {...iconProps} />,
    UL9: <Futbol {...iconProps} />,
    UL10: <Graduation {...iconProps} />,
    UL11: <Date {...iconProps} />,
    UL12: <Loveseat {...iconProps} />,
  }

  return licensesTypesIcons[typeCode] ? licensesTypesIcons[typeCode] : <TrackTime {...iconProps} />
}
