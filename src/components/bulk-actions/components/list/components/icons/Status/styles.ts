import styled from 'styled-components'
import { StatusIconType } from './Status.interface'

export const SCIcon = styled.div<StatusIconType>`
  display: flex;
  width: 6px;
  min-height: 100%;
  margin-right: 10px;
  background-color: ${({ color }) => color};
  transition: width 0.2s;
`
