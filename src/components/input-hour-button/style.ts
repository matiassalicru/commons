import styled, { css } from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { InputHourButtonStyleProps } from './InputHourButton.interface'

export const SCIHButtonContainer = styled.div<InputHourButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? `1px solid ${Colors.grey[500]};` : `1px solid ${Colors.grey[100]};`)}
  border-radius: 4px;
  width: 73px;
  height: 28px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 7px;
  user-select: none;

  &:focus {
    background: inherit;
    outline: 0;
  }
  span {
    width: 6px;
  }

  ${({ changeMode, selected }) =>
    changeMode &&
    css`
      background-color: #d9f4ff;
      border:${selected ? `solid 1px ${Colors.info.main};` : 'solid 1px transparent;'}
      padding: 7px;
      color: ${Colors.info.main};
      border-radius: 4px;
      transition: background-color 0.5s ease;
    `}
`
