import { FunctionComponent, ReactElement } from 'react'

// Styles
import { SCFilterSkeletonsWrapper } from './style'

// UI Components
import { ChipSkeleton } from './components/ChipSkeleton'
import { AddButtonSkeleton } from './components/AddButtonSkeleton'
import { CleanButtonSkeleton } from './components/CleanButtonSkeleton'

export const FiltersSkeletons: FunctionComponent = (): ReactElement => (
  <SCFilterSkeletonsWrapper>
    <ChipSkeleton />
    <ChipSkeleton size="large" />
    <ChipSkeleton size="large" />
    <AddButtonSkeleton />
    <CleanButtonSkeleton />
  </SCFilterSkeletonsWrapper>
)
