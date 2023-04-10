import { ReactNode } from 'react'

export type BICPlace = 'top' | 'right' | 'bottom' | 'left'
export interface TooltipProps {
  delay?: number // Tooltip delay to show.
  maxWidth?: string // Tooltip max width
  place?: BICPlace // Tooltip position.
  zIndex?: number // Tooltip z-index
  content: string // Content of tooltip
  children?: ReactNode // Tooltip Node to be display on
  icon?: string // Icon if decided to use SVG instead of children
  iconClass?: string // newClass for SvgIcon component
}

export interface SCTooltipProps {
  maxWidth: string
  place?: BICPlace
  zIndex: number
}
