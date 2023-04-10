import { RefObject } from 'react'

export interface InputHourProps {
  label: string
  isActive: boolean
  time: number
  focusInput?: boolean
  maxValue: number
  handleChangeValue: (value: number, origin: string) => void
  isSuggestion?: boolean
  refInput: RefObject<HTMLInputElement>
  inputId?: string
  editPermission?: boolean
}

export interface InputHourStyles {
  isSuggestion: boolean
  isActive: boolean
  editPermission: boolean
}
