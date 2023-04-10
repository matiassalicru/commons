import styled, { css } from 'styled-components'
import { InputHourStyleProp } from './InputHour.interface'

export const SCIHWrapper = styled.div<InputHourStyleProp>`
  ${({ estimateEnabled }) =>
    !estimateEnabled &&
    css`
      display: grid;
      grid-template-columns: 0.05fr 1fr;
    `}
  gap: ${({ gap }) => gap}px;
  ${({ enableComments }) =>
    enableComments &&
    css`
      display: grid;
      grid-template-columns: 160px 120px 25px;
    `}
`

export const SCIHEmptyHour = styled.div`
  transform: translateX(40px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 130px;
`

export const SCIHWrapperButton = styled.div`
  display: flex;
  align-items: center;
  order: 3;
`
