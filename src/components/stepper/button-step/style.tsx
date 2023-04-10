import styled, { css } from 'styled-components'
import { SCContentProps, Position } from './ButtonStep.interface'

export const SCContent = styled.div<SCContentProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ color }) => color || '#0094ca'};
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || '#0088b9'};
  }

  ${({ position }) =>
    position === Position.right &&
    css`
      justify-self: end;
      flex-direction: row-reverse;
    `}
`
