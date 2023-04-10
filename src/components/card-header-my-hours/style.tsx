import styled, { css } from 'styled-components'
import pallete from '@projectcor/theme/lib/base/colors'
import { CardHeaderMyHoursStyleProps } from './CardHeaderMyHours.interface'

export const SCCMHInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const SCCMHInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`

export const SCCMHInfoTitle = styled.span`
  text-transform: capitalize;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 500;
  color: #5a5a5a;
`

export const SCCMHHour = styled.span<CardHeaderMyHoursStyleProps>`
  font-weight: 600;
  ${({ userInfo }) => userInfo && `margin-right: 2px;`}
  ${({ exceedsDailyHour }) => exceedsDailyHour && `color: ${pallete.colors.warning.main};`}
`

const stylesWithHours = css`
  ${SCCMHHour} {
    font-weight: 600;
  }
`
export const SCCMHInfoHour = styled.div<Pick<CardHeaderMyHoursStyleProps, 'hasHours'>>`
  display: flex;
  color: ${pallete.colors.secondary};
  font-size: 14px;
  padding: 0px 4px;
  cursor: default;
  height: 24px;
  align-items: center;
  ${({ hasHours }) => hasHours && stylesWithHours}
  & span {
    padding-right: 4px;
  }
`

export const SCCMHModalHeaderWrapper = styled.div<Pick<CardHeaderMyHoursStyleProps, 'isProgressBar'>>`
  display: flex;
  text-transform: capitalize;
  color: #5a5a5a;
  font-size: 14px;
  align-items: center;
  width: ${({ isProgressBar }) => (isProgressBar ? '280px' : '291px')};
  gap: 20px;
`

export const SCCMHSuggestedHeaderNIH = styled.div<CardHeaderMyHoursStyleProps>`
  min-width: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SCCMHConfirmHeaderNIH = styled.div<CardHeaderMyHoursStyleProps>`
  min-width: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SCCMHModalContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
`

export const SCCMHWrapperTooltipIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
`
export const SCCMHWrapperTooltipMessage = styled.p`
  margin: 0;
  font-family: 'Work Sans';
  font-size: 12px;
  font-weight: 400;
  padding: 4px 0;
`
export const SCCMHWrapperTooltipLink = styled.a`
  color: #0088cc;
  text-decoration: none;
  &:hover {
    color: #0088cc;
  }
`
export const SCIndicator = styled.span<CardHeaderMyHoursStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  align-self: center;
  ${({ indicatorColor }) => indicatorColor && `background-color: ${indicatorColor};`}
`
