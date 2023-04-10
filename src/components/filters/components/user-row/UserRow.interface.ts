import { AvatarDataTypes } from '../../Filters.interface'

export interface UserRowTypes {
  data?: AvatarDataTypes
  onSelect: (value) => void
  selected?: boolean
  isFocused?: boolean
  isDisabled?: boolean
  index: number
  visible?: boolean
}

export interface WrapperUserRow {
  isSelected: boolean
  isFocused?: boolean
  visible?: boolean
}

export interface InputTypes {
  isDisabled: boolean
}
