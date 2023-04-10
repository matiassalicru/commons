export interface CardHeaderMyHoursProps {
  subtitle: string
  infoHour: string
  userInfo?: string | number
  titleSuggestion: string
  titleTracked: string
  tooltipMessage?: string
  exceedsDailyHour?: boolean
  showIndicator?: boolean
  indicatorColor?: string
  sizeTitleSuggestion?: string
  sizeTitleTracked?: string
  showColumns?: boolean
  newInputHours?: boolean
  isProgressBar?: boolean
  tooltipSuggestion?: string
  tooltipRedirect?: string
  urlRedirect?: string
}

export interface CardHeaderMyHoursStyleProps {
  userInfo?: string | number
  exceedsDailyHour?: boolean
  indicatorColor?: string
  width?: string
  isProgressBar?: boolean
  hasHours?: boolean
}
