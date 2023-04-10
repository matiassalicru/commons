// Interfaces
import { AvatarDataTypes, DateType, TextTypes } from 'components/bulk-actions/components/list/List.interface'
import { ItemType } from '../../../dropdown/Dropdown.interface'

export interface ActionsValuesTypes {
  id: string
  color?: string
}

interface ActionOptionTypes {
  id: string
  actions?: ItemType[]
}

export interface ActionValuesTypes {
  id: string
  type: string
  values?: TextTypes[] | AvatarDataTypes[] | DateType[] | never[]
  translations?
}
export interface GetMappedActionsInterface {
  delete: ActionOptionTypes
  actions: ActionOptionTypes
  archive: ActionOptionTypes
  unarchive: ActionOptionTypes
  copyLinks: ActionOptionTypes
}
