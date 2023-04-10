/* eslint-disable @typescript-eslint/indent */
import { memo, ReactElement, useState } from 'react'
// Theme MD
import { ThemeProvider } from '@material-ui/core/styles'
// Material Design
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import { IconButton, InputAdornment, createMuiTheme, ThemeOptions } from '@material-ui/core'
// Utils
import moment from 'moment'
import MomentUtils from '@date-io/moment'
// UI Components
import { Tooltip } from '@projectcor/tooltip/lib'
// GlobalComponent
import { SvgIcon } from '../svg-icon'
// Styles
import { SCDatePickerWrapper } from './style'
import { DatetimeProps } from './Datetime.interface'

const materialTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
      input: {
        'padding-top': '10px',
      },
    },
    MuiIconButton: {
      root: {
        padding: '0',
        'font-size': '14px',
      },
    },
    MuiDialog: {
      root: {
        zIndex: 9999999,
      },
    },
    MuiTypography: {
      h3: {
        'font-size': '2.6rem',
      },
    },
    MuiPaper: {
      elevation1: {
        'box-shadow': 'none',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#707070',
        'font-size': '16px',
        'font-weight': '500 !important',
        'text-transform': 'uppercase',
      },
    },
    MuiInput: {
      underline: {
        'font-size': '14px !important',
        '&::before': {
          'border-bottom': 'none',
        },
        '&.Mui-disabled': {
          '&::before': {
            'border-bottom-style': 'none',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0094CA',
    },
    error: {
      main: '#E34259',
    },
  },
  typography: {
    htmlFontSize: 13,
  },
  MuiPickersCalendarHeader: {
    iconButton: {
      padding: '12px',
      'font-size': '1.84rem',
    },
  },
  MuiPickerDTTabs: {
    tabs: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
  },
  PrivateTabIndicator: {
    colorSecondary: {
      'background-color': '#0094CA',
    },
  },
} as ThemeOptions)

export const Datetime = memo(
  ({
    lang = 'en',
    icon,
    label = '',
    format,
    tooltip = '',
    disabled = false,
    clearable = false,
    isExpired = false,
    emptyLabel = true,
    defaultDate = null,
    handleUpdate,
    translations,
    minDate = '',
    error = false,
    helperText = '',
  }: DatetimeProps): ReactElement => {
    const language = lang === 'br' ? 'pt-br' : lang
    const [actualDate, setActualDate] = useState(defaultDate)

    const handleChange = date => {
      if (!date?.isSame(defaultDate)) {
        handleUpdate(date)
        setActualDate(date)
      }
    }

    moment.locale(language)

    return (
      <Tooltip placement="top" title={tooltip || ''}>
        <SCDatePickerWrapper isExpired={isExpired}>
          <MuiPickersUtilsProvider locale={language} utils={MomentUtils} libInstance={moment}>
            <ThemeProvider theme={materialTheme}>
              <DateTimePicker
                autoOk
                label={label}
                format={format}
                minutesStep={5}
                showTodayButton
                data-html
                value={actualDate}
                disabled={disabled}
                clearable={clearable}
                onChange={handleChange}
                okLabel={translations.ok}
                clearLabel={translations.clear}
                todayLabel={translations.today}
                cancelLabel={translations.cancel}
                emptyLabel={emptyLabel ? translations.addDate : '-'}
                minDate={minDate}
                error={error}
                helperText={helperText}
                InputProps={
                  icon
                    ? {
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <SvgIcon iconName="calendar-alt" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }
                    : undefined
                }
              />
            </ThemeProvider>
          </MuiPickersUtilsProvider>
        </SCDatePickerWrapper>
      </Tooltip>
    )
  },
  (prevProps, nextProps) =>
    prevProps.isExpired === nextProps.isExpired &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.tooltip === nextProps.tooltip
)
