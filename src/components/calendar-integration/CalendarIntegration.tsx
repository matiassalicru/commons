import { useEffect, ReactElement, useState } from 'react'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import moment, { Moment } from 'moment'
import { ChevronUp } from '@projectcor/icons/lib/components/ChevronUp'
import { ChevronDown } from '@projectcor/icons/lib/components/ChevronDown'
import Colors from '@projectcor/theme/lib/base/colors'
import { CalendarIntegrationProps } from './CalendarIntegration.interface'
import { SCCIWrapper, SCCIWrapperHeader, SCCIYear, SCCIDate, SCCIWrapperDate } from './style'
import { Calendar } from './calendar'

export const CalendarIntegration = ({
  language = 'en',
  showDaysAgo = 30,
  selected = '',
  pointData = [{ date: '' }],
  onSelectedDay = () => undefined,
  setOpenCalendarState = () => undefined,
  legend,
  amplitudEventOpenDatePicker = () => undefined,
}: CalendarIntegrationProps): ReactElement => {
  moment.locale(language)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [dayValue, setDayValue] = useState({} as Moment)
  const [year, setYear] = useState('')
  const [date, setDate] = useState('')

  const FORMAT_DATE = 'ddd, MMM DD'

  const handleOpenCalendar = (): void => {
    setOpenCalendarState(!openCalendar)
    setOpenCalendar(!openCalendar)
    amplitudEventOpenDatePicker()
  }

  useEffect(() => {
    const day = selected ? moment(selected) : moment()
    setDayValue(day)
    setYear(moment(day).get('year').toString())
    setDate(moment(day, language).format(FORMAT_DATE))
  }, [])

  const handleChangeDate = (muiDate: MaterialUiPickersDate): void => {
    setDayValue(moment(muiDate))
    openCalendar && setOpenCalendar(false)
    setOpenCalendarState(false)
    onSelectedDay(muiDate)
  }

  const oneMonthAgo = moment().subtract(showDaysAgo, 'days')

  const iconStyles = {
    width: '14px',
    height: '14px',
    color: Colors.white.main,
  }

  return (
    <SCCIWrapper>
      <SCCIWrapperHeader onClick={handleOpenCalendar}>
        <SCCIWrapperDate>
          <SCCIYear>{year}</SCCIYear>
          <SCCIDate>{date}</SCCIDate>
        </SCCIWrapperDate>
        {openCalendar ? <ChevronUp {...iconStyles} /> : <ChevronDown {...iconStyles} />}
      </SCCIWrapperHeader>
      {openCalendar && (
        <Calendar
          locale={language}
          dayValue={dayValue}
          handleChangeDate={handleChangeDate}
          oneMonthAgo={oneMonthAgo}
          pointData={pointData}
          legend={legend}
        />
      )}
    </SCCIWrapper>
  )
}
