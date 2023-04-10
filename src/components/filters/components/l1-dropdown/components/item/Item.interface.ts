import { FilterOptionTypes } from '../../../../Filters.interface'

export interface WrapperProps {
  isSelected?: boolean
}

export interface ItemTypes {
  text: string
  icon: string
  data: FilterOptionTypes
  onClick: (args: FilterOptionTypes) => void
  isSelected?: boolean
}
