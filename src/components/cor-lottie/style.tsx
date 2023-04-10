import styled from 'styled-components'
import { CORLottieProps } from './CORLottie.interface'

export const SCWrapperLottie = styled.div<CORLottieProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`
