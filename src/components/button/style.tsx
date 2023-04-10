import styled from 'styled-components'
import { StyleButtonProps } from './button.interface'

function typeButton(typeVariant) {
  switch (typeVariant) {
    case 'primary':
      return `background: #0094ca;
            color: #ffffff;
            &:hover {
              background: #0383b0;
            }`
    case 'secondary':
      return `background: #ffffff;
            color: #0094ca;
            border: 1px solid;
            border-color: transparent;
            &:hover {
                background: #e2f6ff;
            }`
    case 'white':
      return `background: #ffffff;
            color: #888888;
            border: 1px solid;
            border-color: transparent;
            &:hover {
            color: #000000;
            }`
    case 'danger':
      return `background: #e34259;
            color: #ffffff;
            margin: "0";
            border: 1px solid;
            border-color: transparent;
            &:hover {
                background: #da2b44;
            }`
    default:
      return ''
  }
}

function disabledStyle() {
  return `background: #ebebeb;
    color: #5a5a5a;
    border: 1px solid;
    border-color: transparent;
    pointer-events: none;`
}

export const SCButton = styled.button<StyleButtonProps>`
  padding: 9px 15px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
  ${({ disabled, typeVariant }) => (disabled ? disabledStyle() : typeButton(typeVariant))}
`
