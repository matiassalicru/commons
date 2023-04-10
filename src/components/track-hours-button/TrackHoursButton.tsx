import { ReactElement } from 'react'
import { TrackTime } from '@projectcor/icons/lib/components/TrackTime'
import { SCHLWrapper, SCIcon, SCSpan } from './style'
import { TrackHoursButtonProps } from './TrackHoursButton.interface'

export const TrackHoursButton = ({ text = 'Track hours' }: TrackHoursButtonProps): ReactElement => {
  return (
    <SCHLWrapper>
      <SCIcon>
        <TrackTime />
      </SCIcon>
      <SCSpan>{text}</SCSpan>
    </SCHLWrapper>
  )
}
