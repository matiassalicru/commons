import { EventLogFuc, BindedData } from '../InputHour.interface'
import { BICPlace } from '../../tooltip-cor/Tooltip.interface'

export interface ChargeHourProps {
  hourLoad: number | string
  minuteLoad: number | string
  enabledDay: boolean
  handleDeleteHour: (arg?) => void
  handleClickCheckHour: (arg?) => void
  editText?: string
  enableEditHour: boolean
  enableDeleteHour: boolean
  deleteTextTooltip?: string
  cancelTextTooltip?: string
  acceptTextTooltip?: string
  size: number
  iconSize: number
  fontSize: number
  space: number
  mode: string
  eventLog?: EventLogFuc
  bindedData?: BindedData
  onStartEdition: () => void
  onCloseEdition: () => void
  contextInfo?: string
  tooltipId?: string | number
  inputMode?: boolean
  swapCss: string | false
  variant?: boolean
  tooltipPlace?: BICPlace
  content?: string
  iconColor?: string
  enableEstimateButton?: boolean
  iconSuggestionSize?: number
  stayEdited?: boolean
  grayLogo?: boolean
  estimateEnabled?: boolean
  zIndex?: number
  withPointer?: boolean
}

export interface ChargeHourStyleProps {
  enableEdit?: boolean
  wrapperWidth?: number
  fontSize?: number
  space?: number
  mode?: string
  swapCss?: string | false
  variant?: boolean
  enableEstimateButton?: boolean
  estimateEnabled?: boolean
  hasThreeDigit?: boolean
}
