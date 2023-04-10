import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { Moment } from 'moment'
import { PointDataInterface } from '../CalendarIntegration.interface'

export interface CalendarProps {
  locale: string
  dayValue: Moment
  handleChangeDate: (muiDate: MaterialUiPickersDate) => void
  oneMonthAgo: string | Moment
  pointData: [PointDataInterface]
  legend: string
}

export interface CalendarStyleProps {
  margin?: string
}
