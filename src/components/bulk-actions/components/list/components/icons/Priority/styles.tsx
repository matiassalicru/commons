import styled from 'styled-components'

// Types
import { SCIconWrapperTypes } from './Priority.interface'

export const SCIconWrapper = styled.div<SCIconWrapperTypes>`
  display: flex;
  margin: 0px 10px;
  color: ${({ color }) => color};
`
