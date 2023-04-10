import styled, { css } from 'styled-components'
import { ButtonCustomStylesProps } from './ButtonCustom.interface'

const PRIMARY_COLOR = '#0088cc'
const HOVER_COLOR = '#006699'
const ACTIVE_COLOR = '#004466'
const FOCUS_COLOR = '#004466'
const DISABLED_COLOR = '#bfbfbf'
const BOX_SHADOW = '0px 2px 6px rgba(0, 0, 0, 0.28)'

const sizeButton = {
  small: css`
    font-size: 12px;
    padding: 5px 12px;
    min-width: 64px;
  `,
  medium: css`
    min-width: 80px;
    font-size: 14px;
    padding: 8px 12px;
  `,
  large: css`
    min-width: 88px;
    font-size: 14px;
    padding: 10px 16px;
  `,
  xlarge: css`
    min-width: 104px;
    font-size: 20px;
    padding: 12px 24px;
  `,
}

const typeButton = {
  contained: css`
    background-color: ${PRIMARY_COLOR};
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${HOVER_COLOR};
    }
    &:active {
      background-color: ${ACTIVE_COLOR};
    }
    &:focus {
      box-shadow: ${BOX_SHADOW};
      background-color: ${FOCUS_COLOR};
    }
    &:disabled {
      background-color: ${DISABLED_COLOR};
      box-shadow: none;
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${PRIMARY_COLOR};
    outline-color: ${PRIMARY_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: ${HOVER_COLOR};
      outline-color: ${HOVER_COLOR};
      background-color: transparent;
    }
    &:active {
      color: ${ACTIVE_COLOR};
      outline-color: ${ACTIVE_COLOR};
    }
    &:focus {
      filter: drop-shadow(${BOX_SHADOW});
      color: ${FOCUS_COLOR};
      outline-color: ${FOCUS_COLOR};
    }
    &:disabled {
      color: ${DISABLED_COLOR};
      outline-color: ${DISABLED_COLOR};
      box-shadow: none;
    }
  `,
  text: css`
    background-color: transparent;
    color: ${PRIMARY_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #e5f3fa;
      color: ${HOVER_COLOR};
    }
    &:active {
      background-color: #e5ecf0;
      color: ${ACTIVE_COLOR};
    }
    &:focus {
      box-shadow: ${BOX_SHADOW};
      background-color: #e5ecf0;
      color: ${FOCUS_COLOR};
    }
    &:disabled {
      color: ${DISABLED_COLOR};
      background-color: transparent;
      box-shadow: none;
    }
  `,
}

export const SCButtonCustom = styled.button<ButtonCustomStylesProps>`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ fontSize }) => fontSize};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed !important' : 'pointer')};
  border: none;
  box-shadow: none;
  text-shadow: none;
  transition-property: color, background-color, box-shadow, text-shadow, outline;
  transition-duration: 0.3s;
  outline: ${({ outlineColor }) => outlineColor && `1px solid ${outlineColor}`};

  &:hover {
    color: ${({ hoverColor, disabled }) => hoverColor && !disabled && hoverColor};
    background-color: ${({ hoverBackground, disabled }) => hoverBackground && !disabled && hoverBackground};
    outline: ${({ hoverOutlineColor, disabled }) => hoverOutlineColor && !disabled && `1px solid ${hoverOutlineColor}`};
  }

  &:active {
    box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
    text-shadow: ${({ textShadow }) => textShadow && textShadow};
  }

  ${({ variantButton }) => variantButton && typeButton[variantButton]}
  ${({ variantSize }) => variantSize && sizeButton[variantSize]}
`
