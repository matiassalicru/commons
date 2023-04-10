import { BICPlace } from '../../button-icon-custom/ButtonIconCustom.interface'

export interface BPCStyleProp {
  height?: number
  borderRadius?: number
  baseColor?: string // progress bar base color
  progress?: number // bar progress
  chargedBar?: boolean // charged hours progress bar
  typeColor?: string // color of the bar accordin to percentage of total hours charge
  notFullProgress?: boolean
  withFirstBar?: boolean
  withSecondBar?: boolean
  isRoundedSuggestionBar?: boolean
  isEmpty?: boolean
}

export interface BCPProps {
  baseColor?: string
  height?: number
  place?: BICPlace
  delay?: number
  emptyHoursContent: string
  chargedProgress: number
  chargeBarContent: string
  suggestionProgress: number
  suggestedBarContent: string
}
