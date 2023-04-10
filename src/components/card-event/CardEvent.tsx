import { ReactElement, useRef, useState } from 'react'
import { Tooltip } from '@projectcor/tooltip/lib'
// Interface
import Colors from '@projectcor/theme/lib/base/colors'
import moment from 'moment'
import { CardEventProps, DataEvent } from './CardEvent.interface'
// Styles
import { SCCEWrapperEvent, SCCETimeEvent, SCCETitleEvent, SCCEContainer } from './style'
// UI Components
import { ButtonIconCustomWithTooltip } from '../button-icon-custom/ButtonIconCustomWithTooltip'

const ELLIPSIS_STRING_LENGTH = 26

export const CardEvent = ({
  eventId,
  eventTitle,
  taskId,
  startEvent,
  endEvent,
  disabled = false,
  iconName,
  iconSize = 14,
  backgroundIconSize = 18,
  iconColor = Colors.info.main,
  backgroundColor = '#d9f4ff',
  onHoverBackgroundColor = Colors.info.main,
  onHoverColor = '#d9f4ff',
  onClickAction = () => undefined,
  marginCardEvent = '0',
  eventTooltip = '',
  serviceName,
  eventDate,
  duration,
  isDateFormat,
  lang = 'en',
}: CardEventProps): ReactElement => {
  const EVENT_CARD_REF = useRef(null)
  const [showIcon, setShowIcon] = useState(false)

  const formatTime = (date: string, formatDate?: string, isDate?: boolean) => {
    const time = new Date(date)
    if (isDate) time.setTime(time.getTime() + time.getTimezoneOffset() * 1000 * 60)
    return moment(time).format(formatDate)
  }

  const handleClickAction = () => {
    const date = moment(eventDate).format('YYYY-MM-DD')
    const event: DataEvent = {
      date,
      taskId,
      serviceName,
      eventId,
      eventTitle,
      duration,
    }
    onClickAction(event)
  }
  const getHourFormatByLang = () => {
    if (lang === 'en') return 'hh:mm a'
    return 'HH:mm'
  }

  const dateFormat = isDateFormat ? 'DD MMMM' : getHourFormatByLang()
  const startEventTime = formatTime(startEvent, dateFormat, isDateFormat)
  const endEventTime = endEvent ? ` - ${formatTime(endEvent, dateFormat, isDateFormat)}` : ''

  const getFinalTime = () => {
    if (startEventTime.includes('am') && endEventTime.includes('am'))
      return `${startEventTime.replace(' am', '')}${endEventTime}`
    if (startEventTime.includes('pm') && endEventTime.includes('pm'))
      return `${startEventTime.replace(' pm', '')}${endEventTime}`
    return `${startEventTime}${endEventTime}`
  }

  return (
    <SCCEWrapperEvent
      margin={marginCardEvent}
      key={eventId}
      disabled={disabled}
      onMouseOver={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      ref={EVENT_CARD_REF}
    >
      <SCCEContainer disabled={disabled}>
        <Tooltip
          title={eventTitle}
          placement="bottom"
          disableHoverListener={eventTitle.length < ELLIPSIS_STRING_LENGTH}
        >
          <SCCETitleEvent>{eventTitle}</SCCETitleEvent>
        </Tooltip>
        <SCCETimeEvent>{getFinalTime()}</SCCETimeEvent>
      </SCCEContainer>
      {showIcon && (
        <ButtonIconCustomWithTooltip
          icon={iconName}
          iconSize={iconSize}
          background={backgroundColor}
          onHoverBackground={onHoverBackgroundColor}
          onHoverColor={onHoverColor}
          color={iconColor}
          onClikAction={handleClickAction}
          size={backgroundIconSize}
          place="bottom"
          wordingTip={eventTooltip}
          dataRobotId={`SCCEButtonEvent-${eventId}`}
        />
      )}
    </SCCEWrapperEvent>
  )
}
