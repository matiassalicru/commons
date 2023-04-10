import React from 'react'
import { BICPlace } from '../tooltip-cor/Tooltip.interface'

export enum positionProps {
  rightUp = 'rightUp',
  rightDown = 'rightDown',
  leftUp = 'leftUp',
  leftDown = 'leftDown',
  center = 'center',
}

export interface SuggestionButtonProps {
  position?: positionProps | string
  onClick: () => void
  variant?: string
  children?: React.ReactNode[] | React.ReactNode
  size?: number
  wordingTip?: string
  enable?: boolean
  onHover?: () => void
  withPointer?: boolean
  height?: number
  content?: string
  place?: BICPlace
  delay?: number
  iconSize?: number
  noAnimation: boolean
  grayLogo: boolean
  zIndex?: number
  onTooltipOpen?: () => void
  onTooltipClose?: () => void
}

export interface SuggestionButtonStyleProps {
  position: positionProps | string
  variant?: string
  size?: number
  withPointer?: boolean
  grayLogo?: boolean
  zIndex?: number
}
