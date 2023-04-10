import { FC, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'
import { InputHour } from '../InputHour/InputHour'
import { TrackedHourButtonProps } from './TrackedHourButton.interface'
import { SCTHBWrapper } from './TrackedHourButton.style'

const MAX_HOUR = 24
const MAX_MINUTES = 60
const LETTER_HOUR = 'h'
const LETTER_MINUTES = 'm'
const KEY_ENTER = 'Enter'
const KEY_ESC = 'Escape'
const KEY_TAB = 'Tab'

export const TrackedHourButton: FC<TrackedHourButtonProps> = ({
  hour,
  minutes,
  handleAcceptTracked,
  handleDeleteTracked,
  eventLog,
  taskId,
  permissions,
  isInactiveClient = false,
  tooltipWording,
  appcuesClassName = '',
}) => {
  const HOUR_REF = useRef<HTMLInputElement>(null)
  const MINUTE_REF = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [time, setTime] = useState<{ hour: number; minutes: number }>({ hour: 0, minutes: 0 })
  const [focusInputHour, setFocusInputHour] = useState<boolean>(true)
  const [focusInputMinutes, setFocusInputMinutes] = useState<boolean>(false)

  const elementTrashIcon = () => document.getElementById(`SCWrapperIconTrash-${taskId}`)

  const enabledTrashButton = () => {
    const element = elementTrashIcon()
    element?.style?.removeProperty('display')
  }
  const disabledTrashButton = () => {
    const element = elementTrashIcon()
    if (element) element.style.display = 'none'
  }
  const handleClickButton = (event: MouseEvent<HTMLElement>) => {
    if (permissions.edit && !isInactiveClient) {
      disabledTrashButton()
      let param = LETTER_HOUR
      const component = event.target as HTMLElement
      if (component.parentElement?.id === `${taskId}${time.minutes}m`) {
        setFocusInputMinutes(true)
        setFocusInputHour(false)
        param = LETTER_MINUTES
      }
      focusInputMinutes && setFocusInputMinutes(false)
      !focusInputHour && setFocusInputHour(true)
      !isActive && setIsActive(true)
      eventLog?.hourEdit?.(true, param)
    }
  }

  useEffect(() => setTime({ hour, minutes }), [hour, minutes])

  useEffect(() => {
    const evalClick = event => {
      const path = event.path || (event.composedPath && event.composedPath())
      if (!path.some(({ id }) => id?.includes?.(`SCTHBWrapper${taskId}`))) {
        if (isActive) {
          setIsActive(false)
          if ((time.hour !== hour || time.minutes !== minutes) && (time.hour || time.minutes)) {
            eventLog?.hourConfirm?.(true)
            handleAcceptTracked(time)
          }
          if (!time.hour && !time.minutes && (time.hour !== hour || time.minutes !== minutes) && permissions.delete) {
            handleDeleteTracked()
          }
          enabledTrashButton()
        }
        setFocusInputMinutes(false)
        setFocusInputHour(false)
      }
    }
    document.addEventListener('click', evalClick)

    return () => {
      document.removeEventListener('click', evalClick)
    }
  }, [isActive, time])

  const handleKeyPress = ({ key, shiftKey, target }: KeyboardEvent<HTMLInputElement>) => {
    if (key === KEY_ENTER) {
      setIsActive(false)
      if ((time.hour !== hour || time.minutes !== minutes) && (time.hour || time.minutes)) {
        eventLog?.hourConfirm?.(true)
        handleAcceptTracked(time)
      }
      if (!time.hour && !time.minutes && (time.hour !== hour || time.minutes !== minutes) && permissions.delete) {
        handleDeleteTracked()
      } else {
        setTime({ hour, minutes })
      }
      enabledTrashButton()
    }
    if (key === KEY_ESC) {
      setTime({ hour, minutes })
      setIsActive(false)
      eventLog?.hourCancel?.(true)
      enabledTrashButton()
    }
    if (!(shiftKey && key === KEY_TAB) && key === KEY_TAB && target === MINUTE_REF.current) {
      if ((time.hour !== hour || time.minutes !== minutes) && (time.hour || time.minutes)) {
        eventLog?.hourConfirm?.(true)
        handleAcceptTracked(time)
      }
      if (!time.hour && !time.minutes && (time.hour !== hour || time.minutes !== minutes) && permissions.delete) {
        handleDeleteTracked()
      } else {
        setTime({ hour, minutes })
      }
      setIsActive(false)
      enabledTrashButton()
    }
    setFocusInputMinutes(false)
    setFocusInputHour(false)
  }

  const handleChangeInput = (value: number, origin: string) =>
    origin === LETTER_HOUR ? setTime({ ...time, hour: value }) : setTime({ ...time, minutes: value })

  return (
    <Tooltip placement="top" title={isInactiveClient ? tooltipWording : ''}>
      <SCTHBWrapper
        onClick={handleClickButton}
        active={isActive}
        onKeyDown={handleKeyPress}
        id={`SCTHBWrapper${taskId}`}
        editPermission={permissions.edit && !isInactiveClient}
        className={appcuesClassName}
      >
        <InputHour
          label={LETTER_HOUR}
          isActive={isActive}
          time={time.hour}
          focusInput={focusInputHour}
          maxValue={MAX_HOUR}
          handleChangeValue={handleChangeInput}
          refInput={HOUR_REF}
          inputId={`${taskId}${time.hour}h`}
          editPermission={permissions.edit && !isInactiveClient}
        />
        <InputHour
          label={LETTER_MINUTES}
          isActive={isActive}
          time={time.minutes}
          focusInput={focusInputMinutes}
          maxValue={MAX_MINUTES}
          handleChangeValue={handleChangeInput}
          refInput={MINUTE_REF}
          inputId={`${taskId}${time.minutes}m`}
          editPermission={permissions.edit && !isInactiveClient}
        />
      </SCTHBWrapper>
    </Tooltip>
  )
}
