import styled, { keyframes } from 'styled-components'
import { SCTaskSkeletonProps } from './TaskSkeleton.interface'

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 100% 0;
  }
`
const MAIN_BG_COLOR = '#d9d9d9'

export const SCList = styled.ul<SCTaskSkeletonProps>`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns:
    ${({ withFirstItem }) => withFirstItem && '40px'} 10px minmax(150px, 1fr) minmax(80px, 80px) minmax(80px, 120px)
    minmax(80px, 80px) minmax(80px, 165px);
  background: #ffffff;
  height: 54px;
  padding: 0;
  margin: 0;
  position: relative;
  list-style: none;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation-name: ${aniHorizontal};
    animation-duration: 2.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(to right, #cccccc 2%, #666666 18%, #cccccc 33%);
    background-size: 50%;
    mix-blend-mode: overlay;
  }
`
export const SCItem = styled.li`
  height: inherit;
  list-style: none;
  border-bottom: 1px solid #ebebeb;
  &.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SCItemFirst = styled.li`
  background: #f9f9f9 !important;
  border-bottom: 0px solid;
`

export const SCStatus = styled.div`
  width: 100%;
  height: 100%;
  background: ${MAIN_BG_COLOR};
`

export const SCCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${MAIN_BG_COLOR};
`

export const SCSmallCircle = styled(SCCircle)`
  width: 28px;
  height: 28px;
  margin: 0 5px;
  background: ${MAIN_BG_COLOR};
`

const Bar = styled.div`
  border-radius: 15px;
  background: ${MAIN_BG_COLOR};
`

export const SCSmallBar = styled(Bar)`
  width: 70px;
  height: 14px;
`
export const SCMediumBar = styled(Bar)`
  width: 124px;
  height: 14px;
`
export const SCBigBar = styled(Bar)`
  width: 190px;
  height: 14px;
  margin-bottom: 7px;
`

export const SCWrappperTitle = styled.div`
  margin-top: 10px;
  margin-left: 22px;
`

export const SCWrappperActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
