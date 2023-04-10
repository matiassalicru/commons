import { TextTypes, ListTypes, AvatarDataTypes, DateType } from 'components/filters/Filters.interface'

export interface PaginationProps {
  page: number
  lastPage: number
}

export interface ListProps {
  type: ListTypes
  multiple: boolean
  onSelect: (selectedValues) => void
  getSelection: (selectedValue) => void
  data: TextTypes[] | AvatarDataTypes[] | DateType[]
  dataSelected?: TextTypes[] | AvatarDataTypes[] | DateType[]
  openedByChip: boolean
  getNextPageFilter: () => void
  loadingNextPage: boolean
  visible?: boolean
  pagination?: PaginationProps
  searchValue: string
}
