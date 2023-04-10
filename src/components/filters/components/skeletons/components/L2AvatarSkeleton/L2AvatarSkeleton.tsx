import { FunctionComponent, ReactElement } from 'react'
import { SCL2AvatarSkeleton, SCL2TextSkeleton, SCSkeletonWrapper } from './style'

export const L2AvatarSkeleton: FunctionComponent = (): ReactElement => (
  <SCSkeletonWrapper>
    <SCL2AvatarSkeleton />
    <SCL2TextSkeleton />
  </SCSkeletonWrapper>
)
