import { GetMappedActionsInterface } from './utils/getMappedActions/getMappedActions.interface'

interface UserType {
  id: number
  lastName: string
  firstName: string
  remainingHours?: number
  picture?: string
  roleId?: number
}

interface UserObjectType {
  page: number
  lastPage: number
  data: Array<UserType>
}

interface Users {
  users: UserObjectType
}

export interface TrackEventsParams {
  event: string
  option?: string
  type?: string
}

export interface BulkActionsType {
  users: Users
  myData: UserType
  selectedItems: number
  modalElementId: string
  handleCloseWidget: () => void
  bulkActions: GetMappedActionsInterface
  trackEvent: (params: TrackEventsParams) => void
  handleSelectValues: (type: string, data) => void
  handleFetcher: (type: string, variables?) => Promise<unknown>
}
