import { FilterOptionTypes } from '../../Filters.interface'

export interface L1Positions {
  x: number
  y: number
}

export interface L1DropdownTypes {
  onClose: () => void
  l1Positions: L1Positions
  filters: FilterOptionTypes
  appliedFilters?: FilterOptionTypes
  toggleL2Dropdown: (chipData: FilterOptionTypes, openByChip: boolean) => void
  searchFilters?: string
  addFilterToUrl: (id, data) => void
  setSearchFilters: (data) => void
  hasTaskFilterApplied: boolean
  portalElementId: string
}

export interface SCWrapperTypes {
  l1Positions: L1Positions
  showL1: boolean
}
