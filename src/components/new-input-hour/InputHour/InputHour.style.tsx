import styled, { css } from 'styled-components'
import pallete from '@projectcor/theme/lib/base/colors'
import { InputHourStyles } from './InputHour.interface'

export const SCIHChargeInput = styled.input<Pick<InputHourStyles, 'isSuggestion'>>`
  border: none;
  padding: 0;
  /* TODO: add font family in next iteration
   font-family: 'Work Sans';*/
  font-size: 14px;
  outline: none;
  width: 18px;
  text-align: center;
  cursor: inherit;
  border-bottom: 1px solid ${pallete.colors.secondary};
  background-color: inherit;
  color: ${({ isSuggestion }) => (isSuggestion ? `${pallete.colors.seconday}` : `${pallete.colors.dark}`)};
  &::selection {
    background-color: white;
  }
  &:focus {
    border-bottom: 1px solid ${pallete.colors.primary.main};
  }
`

export const SCIHChargeInputTimeWrapper = styled.div<InputHourStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 22px;
  padding-right: 2px;
  ${({ isActive, isSuggestion, editPermission }) =>
    !isActive &&
    !isSuggestion &&
    editPermission &&
    css`
      &:hover {
        background-color: ${pallete.colors.white};
        border-radius: 4px;
      }
    `}
`

export const SCIHLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  font-size: 14px;
  font-weight: 500;
`

export const SCIHLabelLetter = styled.span`
  font-size: 14px;
  font-weight: 500;
`
