import styled from 'styled-components'
// Interfaces
import { SCWrapperTypes } from './Dropdown.interface'

export const SCWrapper = styled.ul<SCWrapperTypes>`
  background: white;
  border-radius: 6px;
  border: solid 1px #ebebeb;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  color: #5a5a5a;
  margin: 5px;
  padding: 0;
  position: absolute;
  z-index: 3;
  user-select: none;
  top: ${({ positions }) => (positions ? positions.y : 0)}px;
  left: ${({ positions }) => (positions ? positions.x : 0)}px;
  width: 250px;

  :before,
  :after {
    content: '';
    border: 8px solid transparent;
    border-bottom-color: #ebebeb;
    bottom: 100%;
    left: 113px;
    position: absolute;
  }

  :after {
    border: 7px solid transparent;
    border-bottom-color: #ffffff;
    left: 114px;
  }
`

export const SCBackdrop = styled.div`
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
`
