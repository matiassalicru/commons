import { EventLogFuc, Permissions, TimeProps } from '../InputHourButton.interface'

export interface TrackedHourButtonProps extends TimeProps {
  handleAcceptTracked: (value: TimeProps) => void
  handleDeleteTracked: () => void
  eventLog?: EventLogFuc
  taskId?: number | string
  permissions: Permissions
  isInactiveClient?: boolean
  tooltipWording?: string
  appcuesClassName?: string
}

export interface TrackedHoursButtonStyles {
  active: boolean
  editPermission: boolean
}
