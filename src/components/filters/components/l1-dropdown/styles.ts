import styled from 'styled-components'

import { SCWrapperTypes } from './L1Dropdown.interface'

export const SCWrapper = styled.ul<SCWrapperTypes>`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(18, 18, 18, 0.24);
  color: #5a5a5a;
  margin: 5px;
  padding: 4px 0;
  position: absolute;
  z-index: 100000;
  user-select: none;
  top: ${({ l1Positions }) => l1Positions.y + 26}px;
  left: ${({ l1Positions }) => l1Positions.x - 5}px;
  width: 232px;
  display: ${({ showL1 }) => (showL1 ? 'block' : 'none')};
`

export const SCBackdrop = styled.div`
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99999;
`
