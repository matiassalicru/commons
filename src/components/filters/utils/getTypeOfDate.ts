import moment from 'moment'
import { WITHOUT_DEADLINE } from '../../../constants/filters/config'

export interface dataTypes {
  fromDate?: string
  toDate?: string
  to?: string
  from?: string
}

// Se toma 100 y 107 días para que no evalúe al 0 como false.
const DEFAULT_DAYS = [100, 107]
const DEFAULT_MONTHS = [1, 3, 6, 12]

export const getTypeOfDate = ({ toDate, fromDate, to, from }: dataTypes): number | boolean => {
  if (fromDate === WITHOUT_DEADLINE) {
    return false
  }

  if (toDate || fromDate || to || from) {
    let diffBetweenDates

    const dateFrom = moment(fromDate || from)
    const dateTo = moment(toDate || to)

    const daysDiff = dateTo.diff(dateFrom, 'days')
    const monthsDiff = dateTo.diff(dateFrom, 'months', true)

    // Verifica si la diferencia de los meses corresponden con los predefinidos
    if (monthsDiff === Math.trunc(monthsDiff) && !DEFAULT_DAYS.includes(daysDiff)) {
      diffBetweenDates = DEFAULT_MONTHS.find(month => month === monthsDiff)
    }

    // Si los meses transcurridos son 0 evalúa la diferencia de días
    if (Math.trunc(monthsDiff) === 0) {
      diffBetweenDates = DEFAULT_DAYS.find(day => day === daysDiff + 100)
    }

    const firstDayOfMonth = moment().startOf('month').format('YYYY-MM-DD')
    const lastDayOfMonth = moment().endOf('month').format('YYYY-MM-DD')
    const firstDayOfLastMonth = moment().startOf('month').subtract(1, 'month').format('YYYY-MM-DD')
    const lastDayOfLastMonth = moment().endOf('month').subtract(1, 'month').format('YYYY-MM-DD')

    // Si el dateFrom y el dateTo son el primer dia y el ultimo del mes pasado, entonces la diferencia de meses es 1
    if (firstDayOfLastMonth === dateFrom.format('YYYY-MM-DD') && lastDayOfLastMonth === dateTo.format('YYYY-MM-DD')) {
      diffBetweenDates = 1
    }

    const isThisMonth =
      dateFrom.format('YYYY-MM-DD') === firstDayOfMonth && dateTo.format('YYYY-MM-DD') === lastDayOfMonth

    return isThisMonth ? 0 : diffBetweenDates || true
  }
  return false
}
