import styled, { css } from 'styled-components'

// UI Components
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { WrapperTypes } from './ChipFilter.interface'

export const SCWrapper = styled.div<WrapperTypes>`
  background: transparent;
  border-radius: 24px;
  border: 1px solid ${Colors.colors.disabled};
  flex-wrap: wrap;
  font-size: 12px;
  padding: ${({ isSimple }) => (isSimple ? '13px 8px' : '13px 8px')};
  position: relative;
  transition: border-color 0.3s;
  display: flex;
  align-content: center;
  height: 24px;
  box-sizing: border-box;
  line-height: normal !important;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: ${Colors.primary.main};
    `}

  &:hover {
    cursor: pointer;
    background-color: ${Colors.background.secondary};
  }
`

export const SCLabel = styled.span`
  color: ${Colors.dark.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  padding-left: 4px;
`

export const SCName = styled.div`
  color: ${Colors.dark.main};
  font-size: 12px;
`

export const SCContentWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const SCTooltipWrapper = styled.div`
  z-index: 99999;
`

export const SCSearchLabel = styled.span`
  color: ${Colors.dark.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 260px;
  padding-left: 4px;
`

export const SCIconWrapper = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin-left: 8px;
  padding: 0;

  &:hover {
    opacity: 0.5;
  }
`
