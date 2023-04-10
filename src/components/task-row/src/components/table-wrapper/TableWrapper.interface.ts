interface columnConfigItem {
  name: string
  width: string
}

export interface gridConfigTypes {
  actions: columnConfigItem
  checkbox: columnConfigItem
  collaborator: columnConfigItem
  deadline: columnConfigItem
  messages: columnConfigItem
  pm: columnConfigItem
  priority: columnConfigItem
  progress: columnConfigItem
  status: columnConfigItem
  title: columnConfigItem
}

export interface TableWrapperTypes {
  columns: string[]
  columnsConfig: gridConfigTypes
  isLargeTask: boolean
}
