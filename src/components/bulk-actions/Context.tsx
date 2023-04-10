import { createContext } from 'react'
import { TrackEventsParams } from './BulkActions.interface'

export interface ContextTypes {
  trackEvent: (params: TrackEventsParams) => void
}

export const BulkActionsContext = createContext<ContextTypes | null>(null)
