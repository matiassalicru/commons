import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { createTheme } from '@material-ui/core'
import { CalendarStyleProps } from './Calendar.interface'

export const materialTheme = createTheme({
  overrides: {
    MuiTypography: {
      body1: {
        textTransform: 'capitalize',
      },
      body2: {
        fontSize: '8px',
      },
    },
  },
  palette: {
    primary: {
      main: Colors.info.main,
    },
  },
})

export const SCCIWrapperDatePicker = styled.div`
  position: absolute;
  box-shadow: 0 2px 10px 0 rgb(79 79 79 / 40%);
  top: 59px;
  width: 312px;
  height: 340px;
  background-color: ${Colors.white.main};
`

export const SCCIDotEvent = styled.div<CalendarStyleProps>`
  background: ${Colors.warning.main};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: -13px;
  z-index: 1;
  ${({ margin }) => margin && `margin: ${margin}`}
`

export const SCCIWrapperDot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SCCIWrapperLegend = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  transform: translateY(0px);
`

export const SCCILegend = styled.p`
  font-size: 12px;
  color: ${Colors.grey[500]};
  margin-left: 5px;
`
