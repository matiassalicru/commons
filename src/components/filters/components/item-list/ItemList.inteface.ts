import { ReactElement } from 'react'

interface ValueTypes {
  id?: string
  value?: string
}

export interface IconProps {
  color: string
}

export interface BorderTypes {
  borderColor: string
}

export interface ItemListProps {
  value: ValueTypes
  onSelect: (value) => void
  icon?: ReactElement
  text?: string
  selected: boolean
  borderColor?: string
  isFocused?: boolean
  isDisabled?: boolean
  index: number
  visible?: boolean
}

export interface WrapperProps {
  isChecked: boolean
  borderColor?: string
  isFocused?: boolean
  visible?: boolean
}
