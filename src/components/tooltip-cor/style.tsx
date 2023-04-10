import styled, { css } from 'styled-components'
import { SCTooltipProps } from './Tooltip.interface'

const tooltipTextColor = '#ffffff'
const tooltipBackgroundColor = '#000000'
const tooltipAuxiliaryMargin = '8px'
const tooltipArrowSize = '6px'
const positionTop = place => place === 'top'
const positionRight = place => place === 'right'
const positionBottom = place => place === 'bottom'
const positionLeft = place => place === 'left'

export const SCWrapperTooltip = styled.div`
  display: flex;
  position: relative;
`

export const SCTooltip = styled.div<SCTooltipProps>`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${tooltipTextColor};
  background: ${tooltipBackgroundColor};
  font-size: 14px;
  z-index: ${({ zIndex }) => zIndex || 100};
  max-width: 198px;
  line-height: 1.2;
  min-width: 40px;
  width: max-content;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '200px')};
  padding: 8px;
  word-break: break-word;
  font-weight: 300;

  &:before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: ${tooltipArrowSize};
    margin-left: calc(${tooltipArrowSize} * -1);
  }

  ${({ place }) =>
    positionTop(place) &&
    css`
      bottom: calc(100% + ${tooltipAuxiliaryMargin});
      &:before {
        top: 100%;
        border-top-color: ${tooltipBackgroundColor};
      }
    `}

  ${({ place }) =>
    positionRight(place) &&
    css`
      left: calc(100% + ${tooltipAuxiliaryMargin});
      top: 50%;
      transform: translateX(0) translateY(-50%);
      &:before {
        left: calc(${tooltipArrowSize} * -1);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-right-color: ${tooltipBackgroundColor};
      }
    `}

    ${({ place }) =>
    positionBottom(place) &&
    css`
      top: calc(100% + ${tooltipArrowSize});
      &:before {
        bottom: 100%;
        border-bottom-color: ${tooltipBackgroundColor};
      }
    `}

    ${({ place }) =>
    positionLeft(place) &&
    css`
      left: auto;
      right: calc(100% + ${tooltipAuxiliaryMargin});
      top: 50%;
      transform: translateX(0) translateY(-50%);
      &:before {
        left: auto;
        right: calc(${tooltipArrowSize} * -2);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-left-color: ${tooltipBackgroundColor};
      }
    `}
`
