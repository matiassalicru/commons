import styled, { css } from 'styled-components'
import { StyleBarProgressWrapper, StyleBarProgressBase, StyleBarProgressPrimary } from './BarProgress.interface'

const Bar = css`
  height: inherit;
  border-radius: inherit;
  position: absolute;
`

export const SCWrapperBars = styled.div<StyleBarProgressWrapper>`
  position: relative;
  overflow: hidden;
  height: ${({ propHeight }) => `${propHeight}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
`

export const SCBaseBar = styled.div<StyleBarProgressBase>`
  width: 100%;
  background: ${({ propColor }) => propColor};
  ${Bar};
`

export const SCPrimaryBar = styled.div<StyleBarProgressPrimary>`
  width: ${({ progress }) => `${progress}%`};
  background: ${({ setColor }) => {
    return setColor
  }};
  transition: width 0.4s ease-out 0.5s;
  ${Bar};
`
