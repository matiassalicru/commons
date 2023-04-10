import { BICPlace } from '../tooltip-cor/Tooltip.interface'

export interface EventLogFuc {
  keyConfirm?: () => void
  keyCancel?: () => void

  hourEdit?: () => void
  hourConfirm?: () => void
  hourCancel?: () => void
  hourDelete?: () => void

  suggestedConfirm?: () => void
  suggestedEdit?: () => void
  suggestedCancel?: () => void
  suggestedDelete?: () => void

  onHoverInfo?: () => void
  onHoverStay?: () => void
}

export interface BindedData {
  date: string
  userId: number | string
}

export interface TimeProps {
  hour: number | string
  minutes: number | string
}

export interface InputHourProps {
  hourLoad: number | string
  minuteLoad: number | string
  /**
   * suggested hours icon size
   */
  iconSuggestionSize?: number
  /**
   * enable charge Hour
   */
  chargeEnabled: boolean
  /**
   * enable estimate hours
   */
  estimateEnabled: boolean
  /**
   * enable estimate hours button
   */
  enableEstimateButton: boolean
  /**
   * variant color to estimate hours
   */
  variant?: boolean
  /**
   * icon color estimate hours
   */
  iconColor?: string
  /**
   * text label content of icon estimate hours
   */
  content?: string
  /**
   *  location for tooltip
   */
  tooltipPlace?: BICPlace
  /**
   * permission_delete: userInfo permition to delete for charged Hour
   */
  enableDeleteHour: boolean
  /**
   * permission_edit: userInfo permition to edit for charged Hour
   */
  enableEditHour: boolean
  enabledDay: boolean
  handleClickCheckHour: ({ hour, minutes }: TimeProps) => void
  handleDeleteHour: (arg?) => void
  // suggested hourxw
  /**
   * enable suggested Hour
   */
  sgEnable: boolean
  sgHourLoad: number | string
  sgMinuteLoad: number | string
  /**
   * permission_edit: userInfo permition to edit for suggested Hour
   */
  sgEnableEditHour: boolean
  /**
   * permission_delete: userInfo permition to delete for suggested Hour
   */
  sgEnableDeleteHour: boolean
  sgHandleClickCheckHour: ({ hour, minutes }: TimeProps) => void
  sgHandleDeleteHour: (arg?) => void
  /**
   * size of the icon container
   */
  size?: number
  /**
   * size of the actual icon
   */
  iconSize?: number
  /**
   * distance between chargeHour and suggestedHour in px
   */
  gap?: number
  /**
   * font size of the components
   */
  fontSize?: number
  /**
   * space between icons
   */
  space?: number
  /**
   * eventLogsFunctions
   */
  eventLog?: EventLogFuc
  /**
   * Extra Data needed for differentiate for others components
   */
  bindedData?: BindedData
  /**
   * Change binding Edit open
   */
  onStartEdition: () => void
  /**
   * Change binding Edit close
   */
  onCloseEdition: () => void
  /**
   * info of the suggestion
   */
  contextInfo?: string
  /**
   * extra id for tooltip
   */
  tooltipId?: string | number

  /**
   * Stay edited for Estimated Mode
   */
  stayEdited: boolean
  /**
   * only enable the suggestion component
   */
  onlySuggestion?: boolean
  /**
   * Swap place between suggested and charged
   */
  swapPlace?: boolean
  /*
   * disable animation
   */
  noAnimation?: boolean
  /**
   * display cor logo in gray
   */
  grayLogo?: boolean

  zIndex?: number
  /**
   * display pointer
   */
  withPointer?: boolean
  /**
   * display comments button
   */
  enabledComments?: boolean
  /**
   * Tooltip message for icon comments
   */
  tooltipButtonComments?: string
  /**
   * Icon Comments
   */
  iconComments?: string
  /**
   * Icon size
   */
  iconCommentsSize?: number
  /**
   * Icon color
   */
  iconCommentsColor?: string
  /**
   * Icon click event
   */
  onClickActionComments?: () => void
  /**
   * Icon Background color
   */
  iconCommentsBgColor?: string
  /**
   * Icon hover color
   */
  iconCommentsHoverBgColor?: string
  /**
   * Icon comments enabled
   */
  iconCommentsEnabled?: boolean
  /**
   * Icon comments background size
   */
  iconCommentsBgSize?: number

  taskIdComments?: number | string

  showCommentsIcon?: boolean
}

export interface InputHourStyleProp {
  gap: number
  estimateEnabled: boolean
  swapCss?: boolean
  enableComments?: boolean
}
