type hourMinute = { hour: number | string; minute: number | string; isSuggested?: boolean }

export interface InputHourGroupButtonProps {
  fontSize?: number | string
  handleSelectedInput: (args: hourMinute) => void
  suggestion?: hourMinute
  reset?: number
  isInactiveClient: boolean
}
