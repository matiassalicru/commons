export interface positions {
  x: number
  y: number
}

export interface ItemType {
  id: string
  type?: string
  icon?: string
  query?: string
  data?
  customIcon?: boolean
}

interface TranslatesKeyMapperProps {
  pm?: string
  collaborator?: string
  priority?: string
  deadline?: string
}

export interface DropdownTypes {
  items: ItemType[]
  onClose: () => void
  positions: positions
  searchFilters?: string
  handleSelectItem: (itemType: ItemType, inputType: string) => void
  translatesKeyMapper?: TranslatesKeyMapperProps
  i18nSection?: string
  isKeyboardNavigationAvailable: boolean
}

export interface SCWrapperTypes {
  positions: positions
}
