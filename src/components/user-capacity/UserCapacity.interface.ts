import React from 'react'

export const PlaceArray = ['top', 'right', 'bottom', 'left'] as const
type Place = typeof PlaceArray[number]

export enum AvatarSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  tiny = 'tiny',
  auto = 'auto',
}

export interface UserCapacityProps {
  picture: string
  remainingHours?: number
  size: AvatarSize
  showTootltip?: boolean
  wordingTooltip?: string
  fromComponent?: string
  firstName: string
  lastName: string
  place?: Place
  roleId?: number
  iconBorderLeft?: React.ReactNode | React.ReactNode[] | string
}
