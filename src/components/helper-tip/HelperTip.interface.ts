export type BICPlace = 'top' | 'right' | 'bottom' | 'left'
export interface HelperTipProps {
  withTip?: boolean // Check if has tooltip.
  wordingTip?: string // Tooltip wording.
  forTooltip?: string // Tooltip key.
  letterToShow: string
  place?: BICPlace // Tooltip position.
}
