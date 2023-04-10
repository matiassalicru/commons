import { FilterOptionTypes, TextTypes, AvatarDataTypes, DateType } from 'components/filters/Filters.interface'
import { PaginationProps } from '../list/List.interface'

export interface L2PositionTypes {
  x: number
  y: number
}

export interface L2DropdownTypes {
  onClose: () => void
  onGoBack: () => void
  l2Positions: L2PositionTypes
  isSimpleFilter: boolean
  optionsToFilter: FilterOptionTypes
  dataSelected: TextTypes[] | AvatarDataTypes[] | DateType[] | []
  setDataSelected: (options) => void
  customDateFromChip: boolean | number
  openedByChip: boolean
  errorState?: boolean
  addFilterToUrl: (id, data) => void
  filters: FilterOptionTypes
  loading: boolean
  getNextPageFilter: () => void
  loadingNextPage: boolean
  pagination: PaginationProps
  setPagination: () => void
  setOptionsToFilter: () => void
  setLoadingNextPage: () => void
  portalElementId: string
}

export interface SCWrapperTypes {
  l2Positions: L2PositionTypes
}
