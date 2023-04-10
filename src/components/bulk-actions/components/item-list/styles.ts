import styled, { css } from 'styled-components'

// styles
import { SCIcon } from '../list/components/icons/Status/styles'

// Types
import { WrapperProps } from './ItemList.interface'

export const SCInput = styled.input`
  position: absolute;
  cursor: pointer;
  height: 100%;
  left: 0;
  top: 0;
  margin: auto;
  width: 100%;
  opacity: 0;
`

export const SCText = styled.div`
  color: rgb(111, 111, 111);
  font-size: 14px;
  display: flex;
  margin: auto;
  transition: padding-left 0.2s;
`

export const SCWrapper = styled.li<WrapperProps>`
  position: relative;
  align-items: center;
  background-color: ${({ isChecked }) => (isChecked ? '#d9f4ff' : '#FFFFFF')};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  list-style: none;
  min-width: 100%;
  padding: 0 10px 0 0;
  margin: auto;
  transition: background-color 0.2s;

  ${({ isChecked }) =>
    isChecked &&
    css`
      background: #f9f9f9;
    `}

  &:hover ${SCIcon} {
    width: 10px;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`

export const SCInformation = styled.div`
  display: flex;
  height: 40px;
`

export const SCIconWrapper = styled.div`
  align-items: center;
  display: flex;
`
export const SCCheckWrapper = styled.div`
  align-items: center;
  color: #49cf83;
  display: flex;
`
