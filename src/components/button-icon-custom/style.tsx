import styled, { css } from 'styled-components'
import { SCButtonIconCustomProps } from './ButtonIconCustom.interface'

export const SCButton = styled.div<SCButtonIconCustomProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  font-size: ${({ iconSize }) => iconSize}px;
  border-radius: ${({ radius }) => (radius === 'circle' ? '50%' : `${radius}px`)};
  border-width: ${({ borderSize }) => borderSize}px;
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ background }) => background};
  transition-property: border-color, color, background-color;
  transition-duration: 0.3s;
  color: ${({ color }) => color || '#000000'};
  cursor: ${({ enabled, customPointer }) => (enabled ? customPointer || 'pointer' : 'not-allowed')};
  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
  ${({ isInactiveClient, backgroundHover, colorHover, borderHover }) =>
    isInactiveClient
      ? css`
          background-color: #dddddd;
          cursor: not-allowed;
        `
      : css`
          &:hover {
            background-color: ${backgroundHover};
            color: ${colorHover};
            border-color: ${borderHover};
          }
        `}
`
