import styled, { css } from 'styled-components'
import { SCPlayProps } from './Play.interface'

const typePlay = variant => {
  if (variant === 'filled')
    return `
        background-color: #0094ca;
        color: #ffffff;
        &:hover {
          background-color: #d9f4ff;
          color: #0094ca;
        }`
  if (variant === 'normal')
    return `
        color: #898e95;
        background-color: transparent;
        &:hover {
          color: #333333;
          background-color: #e2e2e2;
        }
      `

  return ''
}

export const SCButtonPlayStop = styled.button<SCPlayProps>`
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  transition: color 0.3s, background-color 0.3s;
  ${({ hasMargin }) => hasMargin && 'margin: 0 10px'};
  i {
    transform: translateX(${({ isStop }) => (isStop ? '0px' : '2px')});
  }
  &:disabled {
    pointer-events: none;
  }
  ${({ playVariant, isStop }) =>
    isStop
      ? css`
          background-color: #ed2c50;
          color: #ffffff;
          &:hover {
            color: #e44259;
            background-color: #fee4e9;
          }
        `
      : typePlay(playVariant)}
  ${({ isInactiveClient }) =>
    isInactiveClient &&
    css`
      cursor: not-allowed;
      background-color: #dddddd;
    `};
`
