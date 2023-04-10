import { ItemType } from '../../Dropdown.interface'

export interface WrapperProps {
  isSelected?: boolean
}

export interface ItemTypes {
  text: string
  icon?: string
  data: ItemType
  hasCustomIcon?: boolean
  onClick: (args) => void
  isSelected?: boolean
}
