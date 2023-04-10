import styled, { keyframes, css } from 'styled-components'
import { SkeletonsTypes } from './Skeletons.interface'

const animationKeyFrames = keyframes`
  0% { background-position:10% 0 }
  50% { background-position:100% 0 }
  100% { background-position:10% 0 }
`

export const animationMixin = css`
  animation-name: ${animationKeyFrames};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  background: linear-gradient(to right, #ebebeb, #f3f3f3, #d6d3d3);
  background-size: 200% 200%;
`

export const SCFilterSkeletonsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`

export const SCL2SkeletonsWrapper = styled.div<SkeletonsTypes>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: ${({ noStyles }) => (noStyles ? 'auto' : '200px')};
`
