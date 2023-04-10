import React from 'react'

export interface BadgeProps {
  color: string
  label: string
}

export interface ChipProps {
  color: string
  label: string
}

export interface ItemsProps {
  action?: () => void
  badge?: BadgeProps
  chip?: ChipProps
  dataRobotId?: string
  disabled?: boolean
  divider?: boolean
  href?: string
  icon?: string
  label: string
  labelComponent?: React.FC
  options?: ItemsProps[]
  show: boolean
  src?: string
  state?: boolean
  target?: string
}

export interface UserProps {
  firstName: string
  lastName: string
  picture: string
  role: string
}

export interface ProfileButtonProps {
  actions: ItemsProps[]
  environments: ItemsProps[]
  options: ItemsProps[]
  user: UserProps
}
