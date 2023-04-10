import styled, { css } from 'styled-components'
import { InputHourButtonStyles } from './InputHourButton.interface'

const commentsStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SCIHBWrapperIcon = styled.div<InputHourButtonStyles>`
  ${({ enabledComments }) => (enabledComments ? commentsStyles : `display: none`)}
`

export const SCIHBWrapperComments = styled.div<InputHourButtonStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  ${({ isProgressBar }) => isProgressBar && `display: none`};
`

export const SCIHBWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  gap: 21px;
`

export const SCIHBWrapperHours = styled.div`
  display: flex;
  gap: 20px;
`

export const SCIHBEmptyHour = styled.div`
  width: 84px;
`
