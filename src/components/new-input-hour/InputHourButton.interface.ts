import { AppcuesClassName } from '../task-input-hour/TaskInputHour.interface'

export interface EventLogFuc {
  keyConfirm?: (newInput: boolean) => void
  keyCancel?: (newInput: boolean) => void

  hourEdit?: (newInput: boolean, option?: string) => void
  hourConfirm?: (newInput: boolean) => void
  hourCancel?: (newInput: boolean) => void
  hourDelete?: (newInput: boolean) => void

  suggestedConfirm?: (newInput: boolean) => void
  suggestedEdit?: (newInput: boolean) => void
  suggestedCancel?: (newInput: boolean) => void
  suggestedDelete?: (newInput: boolean) => void
  suggestedDefaultMode?: (newInput: boolean) => void
}

export interface TimeProps {
  hour: number
  minutes: number
}

export interface AcceptSuggestionProps extends TimeProps {
  edited: boolean
}

export interface Wordings {
  buttonEdit: string
  buttonAccept: string
  buttonDecline: string
  trackedHourInactiveClient: string
}
export interface Permissions {
  edit: boolean
  delete: boolean
}

export interface InputHourButtonProps {
  enabledComments?: boolean
  tooltipComments?: string
  handleDeleteSuggestion?: () => void
  handleAcceptSuggestion?: (value: AcceptSuggestionProps) => void
  handleAcceptTracked?: (value: TimeProps) => void
  handleDeleteTracked?: (value?: TimeProps) => void
  hourSuggested: number
  minutesSuggested: number
  hourTracked: number
  minuteTracked: number
  hasComments: boolean
  onClickActionComments: () => void
  disabledComments?: boolean
  taskIdComments?: number | string
  wordings: Wordings
  eventLog?: EventLogFuc
  isProgressBar?: boolean
  permissions: Permissions
  taskId: string
  isInactiveClient?: boolean
  appcuesClassName: AppcuesClassName
}

export interface InputHourButtonStyles {
  enabledComments?: boolean
  isProgressBar?: boolean
}
