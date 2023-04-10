import styled, { css } from 'styled-components'
// Theme
import Colors from '@projectcor/theme/lib/base/colors'
// Interface
import { TrialButtonStylesProps } from './TrialButton.interface'

const BASE_STYLES = `
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
  user-select: none;
`

export const SCButton = styled.span<TrialButtonStylesProps>`
  ${BASE_STYLES}
  color: ${Colors.info.main};
  background-color: transparent;
  border: 1px solid ${Colors.info.main};
  padding: 8px 10px;
  border-radius: 50px;
  transition: all 0.2s ease;

  ${({ isInteractive }) =>
    isInteractive
      ? css`
          cursor: pointer;
          &:hover {
            color: #cceeff;
            background-color: ${Colors.info.main};
            border-color: 1px solid transparent;
          }
        `
      : css`
          cursor: default;
        `}
`

export const SCLabel = styled.span`
  ${BASE_STYLES}
  color: ${Colors.grey[500]};
  background: transparent;
  padding: 5px 8px;
`
