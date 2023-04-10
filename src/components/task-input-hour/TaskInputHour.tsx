import { FC } from 'react'
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'
import { Open } from '@projectcor/icons/lib/components/Open'
import { Trash } from '@projectcor/icons/lib/components/Trash'
import { ButtonWithCoachmark } from '../button-coachmark/ButtonWithCoachmark'
import { StatusType, taskInputHourProps } from './TaskInputHour.interface'
import { BreadCrumb } from '../breadCrumb'
import { InputHourButton } from '../new-input-hour/InputHourButton'

import {
  SCTIHContainer,
  SCTIHTaskWrapper,
  SCTIHTaskTitle,
  SCTIHInfoTaskWrapper,
  SCTIHWrapperIcon,
  SCTIHDeleteIconWrapper,
  SCTIHWrapperIconDelete,
} from './style'

const ELLIPSIS_STRING_LENGTH = 39

export const TaskInputHour: FC<taskInputHourProps> = ({
  hourLoad = 0,
  minuteLoad = 0,
  sgHourLoad = 0,
  sgMinuteLoad = 0,
  gap = 20,
  eventLog,
  brandName = '',
  clientName = '',
  projectName = '',
  taskName = '',
  taskTitleWidth = '230',
  status = StatusType.nueva,
  taskId = '',
  customPointer = 'default',
  showHoursInput = true,
  withoutClientText = '',
  withoutProjectText = '',
  enableEditHour = true,
  enableDeleteHour = true,
  iconCommentsEnabled = false,
  tooltipButtonComments,
  commentsId,
  showCommentsIcon = false,
  hasComments = false,
  wordings,
  isProgressBar = false,
  handleDeleteHour = () => null,
  handleClickCheckHour = () => null,
  sgHandleDeleteHour = () => null,
  sgHandleClickCheckHour = () => null,
  onClickTask = () => null,
  onClickTaskRow = () => null,
  onClickComment = () => null,
  isInactiveClient = false,
  appcuesClassName = { trackedHours: '', suggestedHours: '', commentButton: '' },
}) => {
  const statusColor = status in StatusType ? StatusType[status] : ''

  const handleClickTaskName = e => onClickTask(taskId as number, e)

  const handleClickTaskRow = e => onClickTaskRow(taskId as number, e)

  const validateSpacing = !gap

  const permissions = {
    edit: enableEditHour,
    delete: enableDeleteHour,
  }
  return (
    <SCTIHContainer statusColor={statusColor} spacing={validateSpacing.toString()}>
      <SCTIHTaskWrapper onClick={handleClickTaskName} customCursor={customPointer} isProgressBar={isProgressBar}>
        <SCTIHInfoTaskWrapper>
          <BreadCrumb
            brandName={brandName}
            clientName={clientName}
            projectName={projectName}
            withoutClientText={withoutClientText}
            withoutProjectText={withoutProjectText}
          />
          <Tooltip
            key="client_key"
            placement="top"
            title={taskName}
            disableHoverListener={taskName.length < ELLIPSIS_STRING_LENGTH}
          >
            <SCTIHTaskTitle onClick={handleClickTaskRow} taskTitleWidth={taskTitleWidth}>
              {taskName}
            </SCTIHTaskTitle>
          </Tooltip>
        </SCTIHInfoTaskWrapper>
        <SCTIHWrapperIcon>
          <Open width="16px" height="16px" color="#999999" />
        </SCTIHWrapperIcon>
      </SCTIHTaskWrapper>
      <div>
        {showHoursInput && (
          <InputHourButton
            hourSuggested={sgHourLoad as number}
            minutesSuggested={sgMinuteLoad as number}
            hourTracked={hourLoad as number}
            minuteTracked={minuteLoad as number}
            hasComments={hasComments}
            onClickActionComments={onClickComment}
            handleAcceptSuggestion={sgHandleClickCheckHour}
            handleDeleteTracked={handleDeleteHour}
            handleDeleteSuggestion={sgHandleDeleteHour}
            handleAcceptTracked={handleClickCheckHour}
            disabledComments={!iconCommentsEnabled}
            tooltipComments={tooltipButtonComments}
            enabledComments={showCommentsIcon}
            taskIdComments={commentsId}
            taskId={taskId as string}
            wordings={wordings}
            eventLog={eventLog}
            isProgressBar={isProgressBar}
            permissions={permissions}
            isInactiveClient={isInactiveClient}
            appcuesClassName={appcuesClassName}
          />
        )}
      </div>
      <SCTIHDeleteIconWrapper>
        {(!!hourLoad || !!minuteLoad) && enableDeleteHour && (
          <SCTIHWrapperIconDelete id={`SCWrapperIconTrash-${taskId}`}>
            <ButtonWithCoachmark
              description={!isInactiveClient ? wordings.buttonDelete : wordings.buttonDeleteInactiveClient}
              buttonSize="small"
              buttonVariant="text"
              error
              onClickButton={handleDeleteHour}
              isInactiveClient={isInactiveClient}
            >
              <Trash color="inherit" />
            </ButtonWithCoachmark>
          </SCTIHWrapperIconDelete>
        )}
      </SCTIHDeleteIconWrapper>
    </SCTIHContainer>
  )
}
