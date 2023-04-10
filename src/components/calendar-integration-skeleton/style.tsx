import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import Colors from '@projectcor/theme/lib/base/colors'
import { SCACSkeletonProps } from './CalendarIntegrationSkeleton.interface'

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`

export const SCListGrid = styled(motion.div)<Pick<SCACSkeletonProps, 'padding'>>`
  background: ${Colors.white.main};
  ${({ padding }) => padding && `padding: ${padding}`};
`

export const SCItemGridList = styled.div<SCACSkeletonProps>`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation-name: ${aniHorizontal};
    animation-duration: 2.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(to right, #cccccc 0%, #696969 39%, #cccccc 75%);
    background-size: 50%;
    mix-blend-mode: overlay;
  }
`

export const SCHeader = styled(motion.div)<SCACSkeletonProps>`
  width: 268px;
  height: 20px;
  background: #d9d9d9;
  border-radius: 5px;
`

export const SCTitle = styled(motion.div)<SCACSkeletonProps>`
  width: 78px;
  height: 28px;
  background: #d9d9d9;
  border-radius: 8px;
  margin-top: 16px;
`

export const SCCard = styled(motion.div)<SCACSkeletonProps>`
  width: 268px;
  height: 58px;
  background: #d9d9d9;
  border-radius: 5px;
  margin-top: 16px;
`
