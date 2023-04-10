type hourMinute = { hour: number | string; minute: number | string; isSuggested: boolean }

export interface InputHourButtonProps {
  hour: number | string
  minute: number | string
  handleSelectedHour: (arg: hourMinute) => void
  changeMode?: boolean
  fontSize?: number | string
  selected?: boolean
  enableSection: (arg: string, arg2: boolean) => void
}

export interface InputHourButtonStyleProps {
  changeMode: boolean
  fontSize: number | string
  selected: boolean
}
