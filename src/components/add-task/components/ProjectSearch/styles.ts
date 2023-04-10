import styled from 'styled-components'
import { createTheme } from '@material-ui/core/styles'
import Colors from '@projectcor/theme/lib/base/colors'
import { InputStylesProps } from './index.interface'

const BORDER_ERROR_COLOR = '#ed2c50'

export const SCWrapper = styled.div`
  align-items: center;
  display: flex;
`

export const SCInput = styled.input<InputStylesProps>`
  width: 100% !important;
  height: 100% !important;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 12px;
  border-left: 1px solid ${({ borderColor }) => `${borderColor}`};

  &::placeholder {
    color: ${({ hasError }) => (hasError ? BORDER_ERROR_COLOR : Colors.info.main)};
  }
`
export const theme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1) !important',
        border: `solid 1px ${Colors.grey[100]}`,
      },
    },
  },
})
