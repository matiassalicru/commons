import { GetMappedActionsInterface } from '../../utils/getMappedActions/getMappedActions.interface'

export interface ActionsTypes {
  openL1: () => void
  selectedItems: number
  hideWidget: () => void
  actions: GetMappedActionsInterface
  handleSelectValues: (type: string, value?) => void
}
