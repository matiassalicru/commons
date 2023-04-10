import { AcceptSuggestionProps, EventLogFuc, TimeProps, Wordings } from '../InputHourButton.interface'

export interface SuggestedHourButtonStyles {
  active: boolean
}

export interface SuggestionHourButtonProps extends TimeProps {
  handleDeleteSuggestion: () => void
  handleAcceptSuggestion: (value: AcceptSuggestionProps) => void
  wordings: Wordings
  eventLog?: EventLogFuc
  taskId?: number | string
  appcuesClassName: string
}
