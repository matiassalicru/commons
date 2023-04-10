export interface BadgeProps {
  color: string
  label: string
}

export interface NotificationsProps {
  badge?: BadgeProps
  action: () => void
  show: boolean
}

export interface NotificationsButtonProps {
  notifications: NotificationsProps
}
