import { ForwardedRef } from 'react'

export interface WrapperTypes {
  show: boolean
  notTypeable: boolean
  hasFiltersApplied: boolean
  isMenuOpen: boolean
  openedByChip: boolean
  isSimple: boolean
  hasFocus: boolean
  showLabel: boolean
}

export interface ButtonTypes {
  showLabel: boolean
  isMenuOpen?: boolean
  isSimple?: boolean
  hasFocus?: boolean
}

export interface EditableStyles {
  searchValue?: string
}

export interface AddButtonTypes {
  onClick: () => void
  onSearch: (value: string) => void
  isSimple: boolean
  ref?: ForwardedRef<HTMLButtonElement>
  show: boolean
  setSearchFilters: (data) => void
  searchFilters: string
  isMenuOpen: boolean
  openedByChip: boolean
  hasFiltersApplied: boolean
  closedMenus: boolean
  setChipsKeyboardNavigationDisabled: (state: boolean) => void
  notTypeable: boolean
  addButtonId?: string
}
