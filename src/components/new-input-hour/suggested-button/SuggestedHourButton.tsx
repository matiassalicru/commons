import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { InputHour } from '../InputHour/InputHour'
import { TimeProps } from '../InputHourButton.interface'
import { ModalSuggestionOptions } from './modal-suggestion-options/ModalSuggestionOptions'
import { SuggestionHourButtonProps } from './SuggestedHourButton.interface'
import { SCSHBWrapper, SCSHBWrapperModalOptions } from './SuggestedHourButton.style'

const MAX_HOUR = 24
const MAX_MINUTES = 60
const LETTER_HOUR = 'h'
const LETTER_MINUTES = 'm'
const KEY_ENTER = 'Enter'
const KEY_ESC = 'Escape'
const KEY_TAB = 'Tab'

export const SuggestedHourButton: FC<SuggestionHourButtonProps> = ({
  hour,
  minutes,
  handleDeleteSuggestion = () => null,
  handleAcceptSuggestion = () => null,
  wordings,
  eventLog,
  taskId,
  appcuesClassName = '',
}) => {
  const HOUR_REF = useRef<HTMLInputElement>(null)
  const MINUTE_REF = useRef<HTMLInputElement>(null)
  const MODAL_REF = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [time, setTime] = useState<TimeProps>({ hour: 0, minutes: 0 })
  const [isEdited, setIsEdited] = useState<boolean>(false)
  const [showModalOptions, setShowModalOptions] = useState<boolean>(false)

  const handleDeleteHour = () => {
    eventLog?.suggestedDelete?.(true)
    handleDeleteSuggestion()
    isEdited && setIsEdited(false)
  }

  const elementTrashIcon = () => document.getElementById(`SCWrapperIconTrash-${taskId}`)

  const enabledTrashButton = () => {
    const element = elementTrashIcon()
    element?.style?.removeProperty('display')
  }
  const disabledTrashButton = () => {
    const element = elementTrashIcon()
    if (element) element.style.display = 'none'
  }

  useEffect(() => setTime({ hour, minutes }), [hour, minutes])

  useEffect(() => {
    const evalClick = event => {
      const path = event.path || (event.composedPath && event.composedPath())
      if (
        !path.some(
          ({ id }) => id?.includes?.(`SCSHBWrapper${taskId}`) || id?.includes?.(`SCSHBWrapperModalOptions${taskId}`)
        )
      ) {
        if (isActive) {
          setIsActive(false)
          if ((time.hour !== hour || time.minutes !== minutes) && (time.hour || time.minutes)) {
            eventLog?.suggestedConfirm?.(true)
            handleAcceptSuggestion({
              hour: time.hour,
              minutes: time.minutes,
              edited: isEdited,
            })
            setIsEdited(false)
          }
          if (!time.hour && !time.minutes) {
            handleDeleteHour()
          }
          enabledTrashButton()
        }
      }
    }
    document.addEventListener('click', evalClick)

    return () => {
      document.removeEventListener('click', evalClick)
    }
  }, [isActive, time, isEdited])

  const handleKeyPress = ({ key, shiftKey, target }: KeyboardEvent<HTMLInputElement>) => {
    if (key === KEY_ENTER) {
      setIsActive(false)
      if ((time.hour !== hour || time.minutes !== minutes) && (time.hour || time.minutes)) {
        eventLog?.suggestedConfirm?.(true)
        handleAcceptSuggestion({
          hour: time.hour,
          minutes: time.minutes,
          edited: isEdited,
        })
        isEdited && setIsEdited(false)
      }
      if (!time.hour && !time.minutes) {
        handleDeleteHour()
      }
      enabledTrashButton()
    }
    if (key === KEY_ESC) {
      eventLog?.suggestedCancel?.(true)
      setTime({ hour, minutes })
      isActive && setIsActive(false)
      isEdited && setIsEdited(false)
      enabledTrashButton()
    }
    if (!(shiftKey && key === KEY_TAB) && key === KEY_TAB && target === MINUTE_REF.current) {
      if ((time.hour !== hour || time.minutes !== minutes) && (time.hour || time.minutes)) {
        eventLog?.suggestedConfirm?.(true)
        handleAcceptSuggestion({
          hour: time.hour,
          minutes: time.minutes,
          edited: isEdited,
        })
      }
      if (!time.hour && !time.minutes && (time.hour !== hour || time.minutes !== minutes)) {
        handleDeleteHour()
      }
      setIsActive(false)
      setIsEdited(false)
      enabledTrashButton()
    }
  }

  const handleChangeInput = (value: number, origin: string) =>
    origin === LETTER_HOUR ? setTime({ ...time, hour: value }) : setTime({ ...time, minutes: value })

  const handleMouseEnter = () => !showModalOptions && setShowModalOptions(true)

  const handleMouseLeave = () => showModalOptions && setShowModalOptions(false)

  const handleStartEdition = () => {
    handleMouseLeave()
    !isActive && setIsActive(true)
    eventLog?.suggestedEdit?.(true)
    setIsEdited(true)
    disabledTrashButton()
  }

  const handleConfirmHour = () => {
    eventLog?.suggestedConfirm?.(true)
    handleAcceptSuggestion({
      hour: time.hour,
      minutes: time.minutes,
      edited: false,
    })
  }

  return (
    <SCSHBWrapper
      active={isActive}
      onKeyDown={handleKeyPress}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id={`SCSHBWrapper${taskId}`}
      className={appcuesClassName}
    >
      <InputHour
        label={LETTER_HOUR}
        isActive={isActive}
        time={time.hour}
        focusInput
        maxValue={MAX_HOUR}
        handleChangeValue={handleChangeInput}
        isSuggestion
        refInput={HOUR_REF}
      />
      <InputHour
        label={LETTER_MINUTES}
        isActive={isActive}
        time={time.minutes}
        maxValue={MAX_MINUTES}
        handleChangeValue={handleChangeInput}
        isSuggestion
        refInput={MINUTE_REF}
      />
      {showModalOptions && !isActive && (
        <SCSHBWrapperModalOptions id={`SCSHBWrapperModalOptions${taskId}`} ref={MODAL_REF}>
          <ModalSuggestionOptions
            handleEditHour={handleStartEdition}
            handleDenyHour={handleDeleteHour}
            handleConfirmHour={handleConfirmHour}
            wordings={wordings}
          />
        </SCSHBWrapperModalOptions>
      )}
    </SCSHBWrapper>
  )
}
