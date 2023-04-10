import { ActionValuesTypes } from 'components/bulk-actions/utils/getMappedActions/getMappedActions.interface'

interface UserType {
  id: number
  lang: string
  roleId?: number
  lastName: string
  picture?: string
  firstName: string
  remainingHours?: number
}
interface UserObjectType {
  page: number
  lastPage: number
  data: Array<UserType>
}

interface Users {
  users: UserObjectType
}

export interface L2DropdownTypes {
  users: Users
  type: string
  title: string
  myData: UserType
  onClose: () => void
  onGoBack: () => void
  modalElementId: string
  data: ActionValuesTypes
  handleFetcher: (variables?) => Promise<unknown>
  handleSelectValues: (type: string, data) => void
}
