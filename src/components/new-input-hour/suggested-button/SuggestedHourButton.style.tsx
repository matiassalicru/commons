import styled, { css } from 'styled-components'
import pallete from '@projectcor/theme/lib/base/colors'
import { SuggestedHourButtonStyles } from './SuggestedHourButton.interface'

const isActive = css`
  background-color: ${pallete.buttons.activeLight};
  color: ${pallete.colors.secondary};
`

export const SCSHBWrapper = styled.div<SuggestedHourButtonStyles>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${pallete.colors.primary.light};
  border-radius: 4px;
  padding: 4px 8px;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: default;
  color: ${pallete.colors.primary.main};
  ${({ active }) => active && isActive}
`

export const SCSHBWrapperModalOptions = styled.div`
  position: absolute;
  top: -10px;
  width: 76px;
  background: transparent;
  height: 12px;
`
