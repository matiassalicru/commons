import { ReactElement } from 'react'

interface ValueTypes {
  id?: string
  value?: string
}

export interface ItemListProps {
  text: string
  value?: ValueTypes
  selected?: boolean
  isFocused?: boolean
  icon: ReactElement | null
  onSelect: (value) => void
}

export interface WrapperProps {
  isChecked?: boolean
}
