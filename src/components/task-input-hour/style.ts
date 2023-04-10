import styled from 'styled-components'
import { TaskInputHourStyleProps } from './TaskInputHour.interface'

export const SCTIHDeleteIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 36px;
`
export const SCTIHWrapperIconDelete = styled.div`
  display: none;
`
export const SCTIHContainer = styled.div<TaskInputHourStyleProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  border-left: 4px solid ${({ statusColor }) => statusColor};
  ${({ spacing }) => spacing && `justify-content: space-between;`}
  :hover {
    ${SCTIHWrapperIconDelete} {
      display: block;
    }
  }
`
export const SCTIHTaskTitle = styled.div<Pick<TaskInputHourStyleProps, 'taskTitleWidth'>>`
  margin-top: 6px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const SCTIHWrapperIcon = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  display: none;
`

export const SCTIHTaskWrapper = styled.div<Pick<TaskInputHourStyleProps, 'customCursor' | 'isProgressBar'>>`
  width: ${({ isProgressBar }) => (isProgressBar ? '58%' : '100%')};
  position: relative;
  cursor: ${({ customCursor }) => (!customCursor ? 'default' : customCursor)};
  min-width: 270px;
  padding: 6px 0 6px 10.5px;
  display: flex;
  justify-content: space-between;
  :hover {
    background: #e5f3fa;
    ${SCTIHWrapperIcon} {
      display: block;
    }
  }
`

export const SCTIHInfoTaskWrapper = styled.div`
  width: 100%;
`
