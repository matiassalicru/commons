export interface CalendarProps {
  name: string
  id: number
}
export interface CalendarSectionProps {
  title: string
  calendarName: CalendarProps[]
  onClickCalendarSelected: (CalendarProps: CalendarProps) => void
}
