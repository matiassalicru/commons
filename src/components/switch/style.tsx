import styled, { css } from 'styled-components'
import { SwitchSize, SwitchProps } from './Switch.interface'

const SIZE = {
  [SwitchSize.SMALL]: 15,
  [SwitchSize.NORMAL]: 21,
}

type PickSize = Pick<SwitchProps, 'size'>

export const SCLabel = styled.label<PickSize>`
  position: relative;
  display: inline-block;
  ${({ size }) => css`
    width: ${SIZE[size] * 2}px;
    height: ${SIZE[size]}px;
  `}
`

export const SCInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #2196f3;
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + span:before {
    ${({ size }) => css`
      left: calc(100% - ${SIZE[size]}px);
    `}
    border: 2px solid #2196f3;
  }

  &:disabled + span {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:disabled + span:before {
    border-color: #ccc;
  }
`

export const SCSpan = styled.span<PickSize>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.3s;
  border-radius: 20px;

  &:before {
    position: absolute;
    border: 2px solid #ccc;
    box-sizing: border-box;
    content: '';
    ${({ size }) => css`
      width: ${SIZE[size]}px;
      height: ${SIZE[size]}px;
    `}
    top: 0;
    left: 0;
    background-color: #ffffff;
    transition: 0.3s;
    border-radius: 50%;
  }
`
