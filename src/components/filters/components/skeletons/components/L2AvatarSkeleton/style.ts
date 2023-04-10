import styled from 'styled-components'
import { animationMixin } from '../../style'

export const SCSkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`

export const SCL2AvatarSkeleton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  ${animationMixin}
`

export const SCL2TextSkeleton = styled.div`
  width: 140px;
  height: 30px;
  border-radius: 5px;
  ${animationMixin}
`
