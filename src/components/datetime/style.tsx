/* eslint-disable @typescript-eslint/indent */
import styled, { css } from 'styled-components'
import { SCDatetimeProps } from './Datetime.interface'

export const SCDatePickerWrapper = styled.div<SCDatetimeProps>`
  .MuiInputBase-root {
    font-size: 12px;
    ${({ isExpired }) =>
      isExpired &&
      css`
        color: red;
      `}
  }

  .MuiInputBase-input {
    text-align: center;
  }
`
