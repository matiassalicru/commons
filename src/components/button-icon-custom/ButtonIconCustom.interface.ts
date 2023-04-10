export type BICPlace = 'top' | 'right' | 'bottom' | 'left'

export interface ButtonIconCustomProps {
  icon: string // Icon inside button.
  size?: number // Button size (with and height).
  iconSize: number // Icon size (with and height).
  onHoverBackground?: string // Button background on hover.
  onHoverColor?: string // Icon color on hover.
  onHoverBorder?: string // Button border color on hover.
  radius?: string | number // Button border raduis.
  borderSize?: number // Button border size.
  borderColor?: string // Button border color.
  background: string // Button background color.
  color: string // Icon color.
  onClikAction: (buttonRef, event) => void // Button callback on click.
  onHoverAction?: (buttonRef, event) => void // Button callback on mouseEnter
  withTip?: boolean // Check if has tooltip.
  wordingTip?: string // Tooltip wording.
  forTooltip?: string // Tooltip key.
  enabled?: boolean // Button enabled to interact.
  place?: BICPlace // Tooltip position.
  dataTestId?: string // ID for testing
  dataRobotId?: string // Robot ID.
  htmlMode?: boolean // Permit Html text
  custom?: string // custom css for tooltip
  customPointer?: string // custom pointer
  onTooltipOpen?: () => void // Event for open Tooltip
  onTooltipClose?: () => void // Event for open Tooltip
  customStyleTooltip?: null | { whiteSpace: string } // Custom style for tooltip
  isInactiveClient?: boolean // validat if client is inactive
}

export interface SCButtonIconCustomProps {
  size: number
  iconSize: number
  radius: number | string
  borderSize: number
  background: string
  borderColor: string
  enabled: boolean
  backgroundHover: string
  colorHover: string
  borderHover: string
  customPointer: string
  isInactiveClient?: boolean
}
