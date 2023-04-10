import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { SCTitleContentTypes } from './TitleContainer.interface'

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${Colors.colors.gray.light};
  width: 100%;
  box-sizing: border-box;
`

export const SCTitle = styled.p`
  justify-self: start;
  width: fit-content;
  margin: 5.5px 0;
  color: ${Colors.background.primary};
  font-size: 14px;
`

export const SCIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 8px;
  font-size: 12px;

  &:last-child {
    color: ${Colors.colors.gray.light};
    font-size: 11px;
  }
`
export const SCTitleContent = styled.div<SCTitleContentTypes>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 0 ${({ isBackBtnVisible }) => !isBackBtnVisible && 20}px;
`
