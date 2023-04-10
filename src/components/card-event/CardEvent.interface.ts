interface EventProps {
  eventId: string
  eventTitle: string
  serviceName: string
  taskId: number
}
export interface Duration {
  hours: number
  minutes: number
}

export interface DataEvent extends EventProps {
  date: string
  duration: Duration
}
export interface CardEventProps extends EventProps {
  startEvent: string
  endEvent: string
  eventDate: string
  disabled?: boolean
  iconName: string
  iconSize?: number
  iconColor?: string
  backgroundIconSize?: number
  backgroundColor?: string
  onHoverBackgroundColor?: string
  onHoverColor?: string
  onClickAction?: (dataEvent: DataEvent) => void
  marginCardEvent?: string
  eventTooltip?: string
  duration: Duration
  isDateFormat: boolean
  lang?: string
}

export interface CardEventStylesProps {
  disabled: boolean
  margin: string
}
