import { FunctionComponent, ReactElement } from 'react'

// Styles
import { SCL2SkeletonsWrapper } from './style'

// UI Components
import { L2AvatarSkeleton } from './components/L2AvatarSkeleton'

// Interface
import { SkeletonsTypes } from './Skeletons.interface'

export const L2AvatarSkeletons: FunctionComponent<SkeletonsTypes> = ({ noStyles = false }): ReactElement => (
  <SCL2SkeletonsWrapper noStyles={noStyles}>
    <L2AvatarSkeleton />
    <L2AvatarSkeleton />
    <L2AvatarSkeleton />
    <L2AvatarSkeleton />
  </SCL2SkeletonsWrapper>
)
