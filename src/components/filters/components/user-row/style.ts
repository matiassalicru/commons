import styled, { css } from 'styled-components'
// Types
import { InputTypes, WrapperUserRow } from './UserRow.interface'

export const SCInput = styled.input<InputTypes>`
  position: absolute;
  cursor: pointer;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0;
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};
`

export const SCWrapper = styled.div<WrapperUserRow>`
  position: relative;
  display: flex;
  padding: 4px 8px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s;
  background-color: ${({ isSelected }) => (isSelected ? '#d9f4ff' : '#fff')};

  ${({ isSelected }) =>
    !isSelected &&
    css`
      &:hover {
        background-color: #f9f9f9;
      }
    `}

  ${({ isFocused, isSelected }) =>
    isFocused &&
    !isSelected &&
    css`
      background: #f9f9f9;
    `}
  
  ${({ visible }) =>
    !visible &&
    css`
      visibility: hidden;
      position: absolute;
      pointer-events: none;
    `}
`

export const SCInfo = styled.div`
  display: inline-flex;
  gap: 6px;
  min-width: 100%;
  align-items: center;
  padding: 4px 8px;
`
export const SCFullName = styled.div`
  color: #5a5a5a;
  font-size: 14px;

  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const SCEmail = styled.div`
  color: #919191;
  font-size: 10px;
  word-break: keep-all;
  margin-top: 4px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const SCCheck = styled.div`
  color: #49cf83;
`

export const SCCheckContainer = styled.div`
  display: flex;
  min-width: 25px;
  min-height: 25px;
  align-items: center;
`

export const SCNameContainer = styled.div`
  width: 100%;
  min-width: 25px;
`
