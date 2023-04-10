import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

export interface PointDataInterface {
  date: string
}
export interface CalendarIntegrationProps {
  language?: string
  legend: string
  showDaysAgo?: number
  selected: string
  pointData?: [PointDataInterface]
  onSelectedDay: (day: MaterialUiPickersDate) => void
  setOpenCalendarState: (state: boolean) => void
  amplitudEventOpenDatePicker?: () => void
}
