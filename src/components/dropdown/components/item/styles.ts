import styled from 'styled-components'
// UI Components
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { WrapperProps } from './Item.inteface'

export const SCWrapper = styled.li<WrapperProps>`
  align-items: center;
  display: flex;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
  background: ${({ isSelected }) => (isSelected ? Colors.background.secondary : 'none')};
  &:hover {
    background: ${Colors.background.secondary};
  }
`

export const SCText = styled.span`
  font-size: 14px;
  padding-right: 12px;
`

export const SCIconWrapper = styled.span`
  align-items: center;
  display: flex;
  font-size: 16px;
  width: 24px;
`

export const SCStatus = styled.span`
  display: block;
  background-color: ${Colors.tasksStatus.stuck};
  height: 16px;
  margin-right: 20px;
  width: 4px;
`
