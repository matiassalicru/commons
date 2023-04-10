import styled, { css } from 'styled-components'
import { SCLabelProps } from './Label.interface'

const danger = css`
  color: #ed2c50;
  background: #fdc9c5;
  border: 1px solid #ff94a8;
`

const primary = css`
  color: #0096c7;
  background: #d9f4ff;
  border: 1px solid #8ce3ff;
`

const colors = {
  danger,
  primary,
}

export const SCLabel = styled.span<SCLabelProps>`
  display: inline-block;
  line-height: 1;
  padding: 3px 7px;
  text-transform: capitalize;
  border-radius: 15px;
  ${({ variant }) => colors[variant]};
  font-size: 12px;
`
