import styled, { keyframes, css } from 'styled-components'

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`

const animBefore = styled.div`
  background: #ffffff;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    animation-name: ${aniHorizontal};
    animation-duration: 2.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(to right, #cccccc 0%, #696969 39%, #cccccc 75%);
    background-size: 50%;
    mix-blend-mode: overlay;
    z-index: 2;
  }
`

const colorSkeleton = css`
  background: #d9d9d9;
`

const borderRadiusBar = css`
  border-radius: 15px;
`

const BigBar = styled.div`
  ${colorSkeleton}
  ${borderRadiusBar}
`

export const SCWrapper = styled(animBefore)`
  position: relative;
  padding: 11px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4px;
`

export const SCTitle = styled(BigBar)`
  max-width: 70%;
  height: 16px;
`

export const SCInfo = styled(BigBar)`
  max-width: 50%;
  height: 16px;
`
