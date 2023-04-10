import { FunctionComponent, useMemo, useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
// Theme MD
import { ThemeProvider } from '@material-ui/core/styles'
// Utils
import moment from 'moment'
import MomentUtils from '@date-io/moment'
// Material Design
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// styles
import { SCWrapper } from './style'
import { materialTheme } from './materialTheme'
// Interfaces
import { DatetimeType } from './Datetime.interface'

const LANG_EN = 'en'
const FORMAT_DATE_EN = 'MM/DD/YYYY'
const FORMAT_DATE_ES = 'DD/MM/YYYY'

export const Datetime: FunctionComponent<DatetimeType> = ({ handleChangeDate, lang = LANG_EN }) => {
  const [date, setDate] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('globals')

  const formatDate = useMemo(() => (lang === LANG_EN ? FORMAT_DATE_EN : FORMAT_DATE_ES), [lang])

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleChange = useCallback(
    newDate => {
      setIsOpen(false)
      setDate(newDate)
      handleChangeDate(moment(newDate).format('YYYY-MM-DD'))
    },
    [formatDate]
  )

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <SCWrapper>
      <MuiPickersUtilsProvider locale={lang} utils={MomentUtils} libInstance={moment}>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            autoOk
            open={isOpen}
            value={date}
            label={t('date')}
            variant="inline"
            onOpen={handleOpen}
            format={formatDate}
            emptyLabel={t('add')}
            onClose={handleClose}
            onChange={handleChange}
            fullWidth
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </SCWrapper>
  )
}
