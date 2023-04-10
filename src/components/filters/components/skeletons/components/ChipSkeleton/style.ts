import styled from 'styled-components'
import { animationMixin } from '../../style'

export const SCChipSkeleton = styled.div<{ size: string }>`
  width: ${({ size }) => (size === 'lg' ? '232px' : '140px')};
  height: 44px;
  border-radius: 22px;
  ${animationMixin}
`
