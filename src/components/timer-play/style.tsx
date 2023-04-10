import styled, { css } from 'styled-components'
import { SCTimerPlayProps } from './TimerPlay.interface'

export const SCWrapper = styled.span<SCTimerPlayProps>`
  ${({ customStyle }) =>
    customStyle &&
    css`
      width: 80px;
      height: 36px;
      display: flex;
      color: #ed2c50;
      font-weight: 500;
      font-size: 15px;
      align-items: center;
      justify-content: center;
    `}
`
