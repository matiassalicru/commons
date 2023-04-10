import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { SCMessageSkeletonProps } from './MessageSkeleton.interface'

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`

export const SCListGrid = styled(motion.ul)`
  display: grid;
  grid-auto-rows: max-content;
  gap: 37px;
  row-gap: 20px;
  margin: 65px 0 20px 0;
  padding: 0 20px;
  background: #ffffff;
`

export const SCItemGridList = styled.li<SCMessageSkeletonProps>`
  position: relative;
  width: 100%;
  max-width: 60%;
  display: grid;
  grid-template-columns: ${({ place }) => (place ? '1fr auto' : 'auto 1fr')};
  gap: 16px;
  justify-self: ${({ place }) => (place ? 'end' : 'start')};
  height: 40px;
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

export const SCCircle = styled(motion.div)<SCMessageSkeletonProps>`
  width: 24px;
  height: 24px;
  align-self: end;
  grid-row: 1 / 2;
  grid-column: ${({ place }) => (place ? '2 / 3' : '1 / 2')};
  background: #d9d9d9;
  border-radius: 50%;
`

export const SCBar = styled(motion.div)<SCMessageSkeletonProps>`
  height: 40px;
  grid-row: 1 / 2;
  grid-column: ${({ place }) => (place ? '1 / 2' : '2 / 3')};
  background: #d9d9d9;
  border-radius: 8px;
`
