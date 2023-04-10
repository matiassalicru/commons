export interface ProgressBarProps {
  chargedProgress?: number
  chargeBarContent: string
  suggestedBarContent: string
  suggestionProgress?: number
  margin?: string
  height?: number
  colorBaseBar?: string
  title: string
  titleSize?: number
  titleVariant?: string
  emptyHoursContent?: string
  textCursor?: string
}

export interface SCPBStylesProps {
  margin?: string
  alignIcon?: boolean
}
