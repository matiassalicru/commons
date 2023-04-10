import styled from 'styled-components'
// Constants
import { LARGE_SIZE, SMALL_SIZE } from '../../constants/task'

export const SCWrapper = styled.div`
  height: ${({ isLargeTask }) => (isLargeTask ? LARGE_SIZE : SMALL_SIZE)}px;
  display: grid;
  align-content: center;
`

export const SCTitle = styled.div`
  display: grid;
  gap: 3px;
  grid-template-columns: ${({ childQ }) => (childQ ? 'max-content 1fr' : '1fr')};
  align-content: center;
  align-items: center;
  cursor: pointer;
  height: 22px;
  padding-left: 1px;
`

export const SCTitleDeliverable = styled.div`
  cursor: ${({ hasDragAndDrop }) => (hasDragAndDrop ? 'grab' : 'auto')};
  display: flex;

  p {
    color: ${({ archived }) => (archived ? '#919191' : '#5a5a5a')};
    padding: 0;
    margin: 0;
  }
`
