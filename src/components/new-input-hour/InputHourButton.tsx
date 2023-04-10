import { FC } from 'react'
import { Comment } from '@projectcor/icons/lib/components/Comment'
import { CommentFilled } from '@projectcor/icons/lib/components/CommentFilled'
import { InputHourButtonProps } from './InputHourButton.interface'
import { SuggestedHourButton } from './suggested-button/SuggestedHourButton'
import { TrackedHourButton } from './tracked-button/TrackedHourButton'
import {
  SCIHBEmptyHour,
  SCIHBWrapper,
  SCIHBWrapperComments,
  SCIHBWrapperHours,
  SCIHBWrapperIcon,
} from './InputHourButton.style'
import { ButtonWithCoachmark } from '../button-coachmark/ButtonWithCoachmark'

export const InputHourButton: FC<InputHourButtonProps> = ({
  enabledComments = false,
  tooltipComments = '',
  handleDeleteSuggestion = () => null,
  handleAcceptSuggestion = () => null,
  handleAcceptTracked = () => null,
  handleDeleteTracked = () => null,
  hourSuggested,
  minutesSuggested,
  hourTracked,
  minuteTracked,
  hasComments,
  onClickActionComments = () => null,
  disabledComments = false,
  taskIdComments,
  taskId,
  wordings,
  eventLog,
  isProgressBar = false,
  permissions,
  isInactiveClient = false,
  appcuesClassName = { trackedHours: '', suggestedHours: '', commentButton: '' },
}) => {
  const disableSuggestion = !!hourSuggested || !!minutesSuggested
  const replaceLetterEllipsis = (word: string): string => {
    if (word.length > 40) {
      return `${word.slice(0, 40)}...`
    }
    return word
  }

  const iconComments = () => (hasComments ? <CommentFilled color="inherit" /> : <Comment color="inherit" />)

  return (
    <SCIHBWrapper>
      <SCIHBWrapperHours>
        {disableSuggestion && !isInactiveClient ? (
          <SuggestedHourButton
            hour={hourSuggested}
            minutes={minutesSuggested}
            handleDeleteSuggestion={handleDeleteSuggestion}
            handleAcceptSuggestion={handleAcceptSuggestion}
            wordings={wordings}
            taskId={taskId}
            eventLog={eventLog}
            appcuesClassName={appcuesClassName.suggestedHours}
          />
        ) : (
          <SCIHBEmptyHour />
        )}
        <TrackedHourButton
          taskId={taskId}
          hour={hourTracked}
          minutes={minuteTracked}
          handleAcceptTracked={handleAcceptTracked}
          handleDeleteTracked={handleDeleteTracked}
          eventLog={eventLog}
          permissions={permissions}
          isInactiveClient={isInactiveClient}
          tooltipWording={wordings.trackedHourInactiveClient}
          appcuesClassName={appcuesClassName.trackedHours}
        />
      </SCIHBWrapperHours>
      <SCIHBWrapperComments
        className="ie-icon-comment"
        id={`SCIHBWrapperComments-${taskIdComments}`}
        isProgressBar={isProgressBar}
      >
        <SCIHBWrapperIcon enabledComments={enabledComments}>
          <ButtonWithCoachmark
            onClickButton={onClickActionComments}
            buttonSize="small"
            buttonVariant="text"
            iconOnly
            description={disabledComments ? '' : replaceLetterEllipsis(tooltipComments)}
            disabledComments={disabledComments}
            className={appcuesClassName.commentButton}
          >
            {iconComments()}
          </ButtonWithCoachmark>
        </SCIHBWrapperIcon>
      </SCIHBWrapperComments>
    </SCIHBWrapper>
  )
}
