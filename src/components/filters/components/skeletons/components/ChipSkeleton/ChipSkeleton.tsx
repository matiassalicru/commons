import { FunctionComponent, ReactElement } from 'react'
import { SCChipSkeleton } from './style'
import { ChipSkeletonProps } from './ChipSkeleton.interface'

export const ChipSkeleton: FunctionComponent<ChipSkeletonProps> = ({ size = 'small' }): ReactElement => (
  <SCChipSkeleton size={size} />
)
