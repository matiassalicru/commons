import styled, { css } from 'styled-components'
import { SCDotProps } from './Dot.interface'

export const SCDot = styled.div<SCDotProps>`
  height: 10px;
  width: 10px;
  border-radius: 100%;
  transition: background 0.3s;
  background: ${({ selected }) => (selected ? '#0094ca' : '#ebebeb')};
  margin: 0 5px;

  ${({ selected }) =>
    !selected &&
    css`
      cursor: pointer;
      :hover {
        background: #d8d8d8;
      }
    `}
`
