import { ThemeOptions } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

export const materialTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.87)',
        },
        'font-size': '14px',
        color: '#5a5a5a',
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
