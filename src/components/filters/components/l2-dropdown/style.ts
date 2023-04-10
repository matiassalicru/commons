import styled from 'styled-components'

// UI Components
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { SCWrapperTypes } from './L2Dropdown.interface'

export const SCWrapper = styled.div<SCWrapperTypes>`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(18, 18, 18, 0.24);
  color: ${Colors.tasksStatus.stuck};
  margin: 5px;
  padding: 0;
  position: absolute;
  top: ${({ l2Positions }) => l2Positions.y + 26}px;
  left: ${({ l2Positions }) => l2Positions.x - 5}px;
  z-index: 100000;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Work sans';
`

export const SCConfirmButton = styled.button`
  font-family: 'Work sans';
  background: none;
  width: calc(100% - 16px);
  color: ${Colors.white.main};
  font-size: 12px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  background-color: ${Colors.primary.main};
  border-radius: 4px;
  border: none;
  margin: 8px;
  cursor: pointer;
  transition: background 0.3s;
  font-weight: 400;

  &:focus,
  &:hover {
    background: ${Colors.primary.main};
    outline: none;
  }

  &:disabled {
    background-color: ${Colors.colors.disabled};
    cursor: unset;
    font-weight: 300;
  }
`

export const SCBackdrop = styled.div`
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99999;
`

export const SCWrapperDate = styled.div`
  margin: 10px;
`

export const SCImage = styled.img`
  width: 232px;
`

export const SCText = styled.p`
  color: ${Colors.tasksStatus.stuck};
  font-size: 16px;
  text-align: center;
`

export const SCEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 232px;
  padding: 0 20px;
`

export const SCFocusable = styled.input`
  opacity: 0;
  position: absolute;
`
