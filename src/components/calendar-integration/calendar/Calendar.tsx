import { ReactElement, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import moment from 'moment'
// Styles
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import {
  SCCIWrapperDatePicker,
  SCCIDotEvent,
  materialTheme,
  SCCIWrapperDot,
  SCCIWrapperLegend,
  SCCILegend,
} from './style'
import { CalendarProps } from './Calendar.interface'

export const Calendar = ({
  locale,
  dayValue,
  handleChangeDate,
  oneMonthAgo,
  pointData,
  legend,
}: CalendarProps): ReactElement => {
  useEffect(() => {
    const pickerElement = document.querySelector('[class^=MuiPickersBasePicker-pickerView]') as HTMLDivElement
    if (pickerElement) {
      pickerElement.style.maxWidth = '312px'
      pickerElement.style.minWidth = '312px'
      pickerElement.style.minHeight = '278px'
    }
  }, [])

  const validateIsHasDot = (date: MaterialUiPickersDate) => {
    return pointData.find(day => {
      return moment(day.date).isSame(moment(date), 'day') && moment(day.date) < moment()
    })
  }

  const displayDot = (date: MaterialUiPickersDate, dayComponent, _dayInCurrentMonth) => {
    if (_dayInCurrentMonth && validateIsHasDot(date)) {
      return (
        <SCCIWrapperDot>
          {dayComponent}
          <SCCIDotEvent />
        </SCCIWrapperDot>
      )
    }
    return <>{dayComponent}</>
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider locale={locale} utils={MomentUtils} libInstance={moment}>
        <SCCIWrapperDatePicker>
          <DatePicker
            autoOk
            variant="static"
            openTo="date"
            value={dayValue}
            onChange={handleChangeDate}
            disableToolbar
            disableFuture
            minDate={oneMonthAgo}
            renderDay={(day, _selectedDate, _dayInCurrentMonth, dayComponent) =>
              displayDot(day, dayComponent, _dayInCurrentMonth)
            }
          />
          {legend && (
            <SCCIWrapperLegend>
              <SCCIDotEvent margin="0" />
              <SCCILegend>{legend}</SCCILegend>
            </SCCIWrapperLegend>
          )}
        </SCCIWrapperDatePicker>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}
