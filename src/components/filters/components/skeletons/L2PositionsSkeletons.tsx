import { FunctionComponent, ReactElement } from 'react'

// Styles
import { SCL2SkeletonsWrapper } from './style'

// UI Components
import { L2PositionsSkeleton } from './components/L2PositionsSkeleton'

// Interface
import { SkeletonsTypes } from './Skeletons.interface'

export const L2PositionsSkeletons: FunctionComponent<SkeletonsTypes> = ({ noStyles = false }): ReactElement => (
  <SCL2SkeletonsWrapper noStyles={noStyles}>
    <L2PositionsSkeleton />
    <L2PositionsSkeleton />
    <L2PositionsSkeleton />
    <L2PositionsSkeleton />
  </SCL2SkeletonsWrapper>
)
