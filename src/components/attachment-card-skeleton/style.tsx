import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { SCACSkeletonProps } from './AttachmentCardSkeleton.interface'

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`

export const SCListGrid = styled(motion.div)`
  background: #ffffff;
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

export const SCCard = styled(motion.div)<SCACSkeletonProps>`
  width: 155px;
  height: 110px;
  background: #d9d9d9;
  border-radius: 4px;
`

export const SCText = styled(motion.div)<SCACSkeletonProps>`
  width: 140px;
  height: 20px;
  background: #d9d9d9;
  border-radius: 8px;
  margin-top: 15px;
`
