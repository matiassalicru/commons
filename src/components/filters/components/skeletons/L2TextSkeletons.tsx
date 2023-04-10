import { FunctionComponent, ReactElement } from 'react'

// Styles
import { SCL2SkeletonsWrapper } from './style'

// UI Components
import { L2TextSkeleton } from './components/L2TextSkeleton'

// Interface
import { SkeletonsTypes } from './Skeletons.interface'

export const L2TextSkeletons: FunctionComponent<SkeletonsTypes> = ({ noStyles = false }): ReactElement => (
  <SCL2SkeletonsWrapper noStyles={noStyles}>
    <L2TextSkeleton />
    <L2TextSkeleton />
    <L2TextSkeleton />
    <L2TextSkeleton />
    <L2TextSkeleton />
    <L2TextSkeleton />
  </SCL2SkeletonsWrapper>
)
