import { FilterOptionTypes } from '../../Filters.interface'

export interface WrapperTypes {
  isSimple: boolean
  isSelected: boolean
}
export interface ChipFilterTypes {
  onDelete: (id: string) => void
  chipData: FilterOptionTypes
  getChipPosition: (chipRef) => void
  onClick: (chipData: FilterOptionTypes, openByChip: boolean) => void
  getCustomDate: (customDate: number | boolean) => void
  isSelected?: boolean
}
