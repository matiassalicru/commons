import { useMemo, useCallback, useState, FunctionComponent, useEffect, useContext } from 'react'
// Wording
import { useTranslation } from 'react-i18next'
// Theme MD
import { ThemeProvider } from '@material-ui/core/styles'
// Material Design
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { IconButton, InputAdornment } from '@material-ui/core'
// Utils
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import { materialTheme } from './materialTheme'
import 'moment/locale/es'
import 'moment/locale/br'
// Styles
import { SCWrapper, SCContentDate } from './style'
// GlobalComponent
import { SvgIcon } from '../../../svg-icon'
// Types
import { DateRangeTypes } from './DateRange.interface'
// Context
import { ContextTypes, FilterContext } from '../../Context'
// Constants
import { I18N_SECTION } from '../../../../constants/filters/config'
import { FILTER_TYPES } from '../../../../constants/filters/types'

moment.locale('en')

const MAX_DATE_TODAY_FILTERS = ['creationDate']

export const DateRange: FunctionComponent<DateRangeTypes> = ({ onSelect, dataSelected, filterId }) => {
  const [locale, setLocale] = useState('en')
  const [toDate, setToDate] = useState(dataSelected?.toDate || null)
  const [fromDate, setFromDate] = useState(dataSelected?.fromDate || null)
  const { t } = useTranslation(I18N_SECTION)
  const { lang } = (useContext(FilterContext) as ContextTypes) || { lang: 'en' }

  useEffect(() => {
    moment.locale(lang)
    setLocale(lang)
  }, [lang])

  /**
   * Memorizo el formato de la fecha según el idioma
   */
  const formatDateLang = useMemo(() => (lang === 'en' ? 'MM-DD-YYYY' : 'DD-MM-YYYY'), [lang])

  useEffect(() => {
    onSelect([
      {
        type: FILTER_TYPES.DATE,
        value: {
          toDate,
          fromDate,
        },
      },
    ])
  }, [toDate, fromDate])

  /**
   * Callback cada vez que se cambia la fecha inicial
   *
   */
  const handleFromDateChange = useCallback(
    date => {
      const selectedDate = moment(date).format('YYYY-MM-DD')
      setFromDate(selectedDate)
    },
    [toDate]
  )

  /**
   * Callback cada vez que se cambia la fecha final
   */
  const handleToDateChange = useCallback(
    date => {
      const selectedDate = moment(date).format('YYYY-MM-DD')
      setToDate(selectedDate)
    },
    [fromDate]
  )

  const isMaxDateToday = MAX_DATE_TODAY_FILTERS.includes(filterId)
  const getMaxDateFromDateInput = () => {
    if (isMaxDateToday) {
      return {
        maxDate: toDate ? moment(toDate) : moment().format('YYYY-MM-DD'),
      }
    }
    return toDate && { maxDate: moment(toDate) }
  }

  const maxDate = isMaxDateToday
    ? { maxDate: moment().format('YYYY-MM-DD') }
    : fromDate && { minDate: moment(fromDate) }
  const toDateMinDate = fromDate && { minDate: moment(fromDate) }
  const fromDateMaxDate = useMemo(() => getMaxDateFromDateInput(), [toDate, isMaxDateToday])
  const fromDateIsNull = useMemo(() => fromDate === 'null', [fromDate])
  const toDateIsNull = useMemo(() => toDate === 'null', [toDate])

  return (
    <MuiPickersUtilsProvider locale={locale} utils={MomentUtils} libInstance={moment}>
      <ThemeProvider theme={materialTheme}>
        <SCWrapper>
          <SCContentDate>
            <DatePicker
              autoOk
              label={t('dateFrom')}
              format={formatDateLang}
              value={fromDateIsNull ? null : fromDate}
              variant="inline"
              emptyLabel={t('dateAdd')}
              onChange={handleFromDateChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SvgIcon iconName="calendar-alt" />
                    </IconButton>
                  </InputAdornment>
                ),
                className: 'date-picker-styles',
              }}
              {...fromDateMaxDate}
            />
          </SCContentDate>
          <SCContentDate>
            <DatePicker
              autoOk
              label={t('dateTo')}
              value={toDateIsNull ? null : toDate}
              format={formatDateLang}
              variant="inline"
              emptyLabel={t('dateAdd')}
              onChange={handleToDateChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SvgIcon iconName="calendar-alt" />
                    </IconButton>
                  </InputAdornment>
                ),
                className: 'date-picker-styles',
              }}
              {...maxDate}
              {...toDateMinDate}
            />
          </SCContentDate>
        </SCWrapper>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}
