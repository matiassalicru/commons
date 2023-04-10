export interface SearchedDataTypes {
  id: number
  title: string
}
export interface SearchEntityTypes {
  placeholder: string
  onSelect: (data: string) => void
  dataSelected?: SearchedDataTypes
  autoFocus?: boolean
}
