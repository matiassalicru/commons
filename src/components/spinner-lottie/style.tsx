import styled, { css } from 'styled-components'
import { SCSpinnerLottieProps } from './SpinnerLottie.interface'

export const SCWrapperLottie = styled.div<SCSpinnerLottieProps>`
  width: ${({ size, width }) => (width ? `${width}px` : `${size}px`)};
  height: ${({ size, height }) => (height ? `${height}px` : `${size}px`)};
  background: ${({ background }) => background};
  border-radius: 50%;
  cursor: default;
  ${({ withShadow }) =>
    withShadow &&
    css`
      box-shadow: 0 0 17px #e4e4e4;
    `}
`
