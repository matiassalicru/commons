import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import Borders from '@projectcor/theme/lib/base/borders'
import { CardEventStylesProps } from './CardEvent.interface'

export const SCCEWrapperEvent = styled.div<CardEventStylesProps>`
  ${({ margin }) => margin && `margin: ${margin}`};
  border: ${Borders.borderWidth[1]} solid ${Colors.grey[100]};
  max-height: 60px;
  border-radius: ${Borders.borderRadius.sm};
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SCCEContainer = styled.div<Pick<CardEventStylesProps, 'disabled'>>`
  ${({ disabled }) => disabled && 'opacity: 0.4'};
  cursor: default;
`

export const SCCETimeEvent = styled.p`
  font-size: 12px;
  color: ${Colors.grey[400]};
  margin: 0;
  margin-top: 4px;
`

export const SCCETitleEvent = styled.p`
  width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  color: ${Colors.grey[500]};
  margin: 0;
`
