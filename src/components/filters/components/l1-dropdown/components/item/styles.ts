import styled, { css } from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { WrapperProps } from './Item.interface'

export const SCWrapper = styled.li<WrapperProps>`
  align-items: center;
  display: flex;
  padding: 8px;
  cursor: pointer;
  transition: background 0.3s;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #f5f5f5;
    `}
  &:hover {
    background: #f5f5f5;
  }
`

export const SCText = styled.span`
  font-size: 14px;
  padding-right: 12px;
  word-break: break-all;
  font-weight: 400;
  color: ${Colors.text.primary};
`

export const SCIconWrapper = styled.span`
  align-items: center;
  display: flex;
  font-size: 16px;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: ${Colors.text.primary};
`
