import styled, { keyframes } from 'styled-components'

// Themes
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { TaskRowSkeletonProps } from './TaskRowSkeleton.interface'
import { LARGE_SIZE, SMALL_SIZE } from './utils/constants'

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 100% 0;
  }
`

const columnSizeObject = {
  title: 'minmax(150px, 1fr)',
  messages: 'minmax(80px, 80px)',
  priority: 'minmax(80px, 80px)',
  deadline: 'minmax(80px, 80px)',
  progress: 'minmax(80px, 80px)',
  pm: 'minmax(80px, 80px)',
  collaborator: 'minmax(80px, 80px)',
  actions: 'minmax(80px, 110px)',
}

const calculateColumns = (columns: string[], hasCheckBox: boolean) => {
  const columnSize = columns.map(column => columnSizeObject[column]).join(' ')

  return `${hasCheckBox ? '30px' : ''} 10px ${columnSize}`
}

export const SCColumnWrapper = styled.div`
  display: flex;
`

export const SCList = styled.ul<TaskRowSkeletonProps>`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: ${({ columns, hasCheckBox = true }) => calculateColumns(columns, hasCheckBox)};
  background: ${Colors.white.main};
  height: ${({ isLargeTask }) => (isLargeTask ? LARGE_SIZE : SMALL_SIZE)};
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
    background: linear-gradient(to right, ${Colors.grey[200]} 2%, ${Colors.grey[300]} 18%, ${Colors.grey[200]} 33%);
    background-size: 50%;
    mix-blend-mode: overlay;
  }
`
export const SCItem = styled.li`
  height: inherit;
  list-style: none;
  border-bottom: 1px solid ${Colors.grey[100]};
  &.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SCItemFirst = styled.li`
  background: ${Colors.grey[200]} !important;
  border-bottom: 0 solid;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SCItemCheck = styled.div`
  padding: 5px;
  border-radius: 2px;
  background: ${Colors.grey[300]};
`

export const SCStatus = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.grey[300]};
`

export const SCCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${Colors.grey[300]};
`

export const SCSmallCircle = styled(SCCircle)`
  width: 28px;
  height: 28px;
  margin: 0 5px;
  background: ${Colors.grey[300]};
`

const Bar = styled.div`
  border-radius: 15px;
  background: ${Colors.grey[300]};
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
