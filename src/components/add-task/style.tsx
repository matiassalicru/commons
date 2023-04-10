import styled, { css } from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { WrapperStyleProps } from './AddTask.interface'

const HOVER_COLOR = Colors.tasksStatus.new_status
const BORDER_ERROR_COLOR = Colors.tasksStatus.in_design
const BACKGROUND_ERROR_COLOR = '#fee4e9'
const style = css`
  background: #dddddd;
  cursor: not-allowed !important;
`

export const SCWrapper = styled.div<WrapperStyleProps>`
  border: 1px;
  border-left: 4px;
  border-color: ${({ borderColor, hasError }) => (hasError ? `${BORDER_ERROR_COLOR}` : `${borderColor}`)};
  border-style: solid;
  background: ${({ hasError }) => (hasError ? `${BACKGROUND_ERROR_COLOR}` : `#ffffff`)};
  display: flex;
  justify-content: space-between;
  &:focus-within {
    border-color: ${({ hasError }) => (hasError ? `${BORDER_ERROR_COLOR}` : `${HOVER_COLOR}`)};

    input {
      border-color: ${({ hasError }) => (hasError ? `${BORDER_ERROR_COLOR}` : `${HOVER_COLOR}`)};
      background: ${({ hasError }) => (hasError ? `${BACKGROUND_ERROR_COLOR}` : `#ffffff`)};
    }

    button {
      background-color: ${({ hasError }) => (hasError ? `${BORDER_ERROR_COLOR}` : `${HOVER_COLOR}`)};
      padding: 0 13px;
    }

    section {
      display: flex;
    }
  }
`

export const SCSearchWrapper = styled.section`
  display: none;
`

export const SCInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  padding: 12px;
  width: 100%;
  ${({ disabled }) => disabled && style};
`

export const SCButton = styled.button<WrapperStyleProps>`
  align-items: center;
  background: ${({ borderColor }) => `${borderColor}`};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 44px !important;
  ${({ disabled }) => disabled && style};

  &:disabled {
    cursor: pointer;
  }
`
