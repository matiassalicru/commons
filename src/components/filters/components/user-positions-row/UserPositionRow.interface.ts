export interface IPositionRow {
  id: number
  name: string
  categoryName: string
}

export interface IUserPositionsRow extends IPositionRow {
  onSelect: (value) => void
  selected?: boolean
  isFocused?: boolean
  isDisabled?: boolean
  index: number
  visible?: boolean
}
