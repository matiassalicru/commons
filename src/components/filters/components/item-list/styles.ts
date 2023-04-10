import styled, { css } from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { WrapperProps, IconProps, BorderTypes } from './ItemList.inteface'

export const SCInput = styled.input`
  position: absolute;
  cursor: pointer;
  height: 100%;
  left: 0;
  top: 0;
  margin: auto !important;
  width: 100%;
  opacity: 0;
  z-index: 2;
`
export const SCTooltip = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  cursor: pointer;
`

export const SCWrapper = styled.li<WrapperProps>`
  position: relative;
  align-items: center;
  background-color: ${({ isChecked }) => (isChecked ? `${Colors.primary.light} !important` : Colors.colors.white)};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  list-style: none;
  min-width: 232px;
  min-height: 36px;
  box-sizing: border-box;
  padding: 8px;
  margin: auto;
  transition: background-color 0.3s, box-shadow 0.2s;
  font-weight: 400;

  ${({ isChecked }) =>
    !isChecked &&
    css`
      &:hover {
        background-color: #f5f5f5;
      }
    `}
  ${({ isFocused }) =>
    isFocused &&
    css`
      background: #f5f5f5;
    `}
  ${({ visible }) =>
    !visible &&
    css`
      visibility: hidden;
      position: absolute;
      pointer-events: none;
    `}
`

export const SCInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const SCText = styled.div`
  width: 100%;
  color: ${Colors.tasksStatus.stuck};
  font-size: 14px;
  min-width: 25px;
`

export const SCIconWrapper = styled.div<IconProps>`
  align-items: center;
  display: flex;
  width: 24px;
  color: ${({ color }) => color};
  margin-right: 10px;
`
export const SCCheckWrapper = styled.div`
  align-items: center;
  color: ${Colors.primary.main};
  display: flex;
`

export const SCCheckContainer = styled.div`
  min-width: 25px;
  display: flex;
  align-items: center;
  min-height: 25px;
`

export const SCBorder = styled.div<BorderTypes>`
  min-width: 2px;
  height: 16px;
  background-color: ${({ borderColor }) => borderColor};
  margin: 0 17px 0 9px;
  border-radius: 8px;
`
