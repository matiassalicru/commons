import { ReactElement, useEffect, useRef, useState, ChangeEvent, useContext } from 'react'
import { SuggestionButton } from '../../suggestion-button'
import { ButtonIconCustom } from '../../button-icon-custom'
import {
  SCCHWrapper,
  SCCHLabelHour,
  SCCHInputContainer,
  SCCHEditWrapper,
  SCCHActionWrapper,
  SCCHSpace,
  SCCHInput,
  SCCHEditContainer,
  SCCHInfoContainer,
  SCCHInfoContextContainer,
  SCCHTime,
  SCCHButtonSpace,
  SCSHLabelHour,
} from './style'
import { ChargeHourProps } from './ChargedHour.interface'
import { KEY_ENTER, KEY_ESCAPE } from '../../../constants'
import { UserContext } from '../../../providers/UserProvider'

const DEFAULT_WIDTH = 100
// the default size is declade in the father component InputHour, remember to change together if you change the default size.
const DEFAULT_SIZE = 19

const DEFAULT_MODE = 'charged'

const MAX_HOUR = 24

const MAX_HOUR_ESTIMATE = 999

const MAX_MINUTES = 60

export const ChargedHour = ({
  hourLoad,
  minuteLoad,
  enabledDay,
  handleDeleteHour,
  handleClickCheckHour,
  editText,
  enableEditHour,
  enableDeleteHour,
  deleteTextTooltip,
  cancelTextTooltip,
  acceptTextTooltip,
  size,
  iconSize,
  fontSize,
  space,
  mode,
  eventLog,
  bindedData,
  onStartEdition,
  onCloseEdition,
  contextInfo,
  tooltipId,
  swapCss,
  tooltipPlace,
  content,
  variant,
  iconColor,
  enableEstimateButton,
  iconSuggestionSize,
  stayEdited,
  grayLogo,
  estimateEnabled,
  zIndex,
  withPointer,
}: ChargeHourProps): ReactElement => {
  const [enableEdit, setEnableEdit] = useState(false)
  const [chargedHour, setChargedHour] = useState('')
  const [chargedMinute, setChargedMinute] = useState('')
  const [displayEditOnHover, setDisplayEditOnHover] = useState(false)
  const [showIconAnimation, setShowIconAnimation] = useState(false)
  const HOUR_REF = useRef<HTMLInputElement>(null)
  const MINUTE_REF = useRef<HTMLInputElement>(null)
  const SUGGESTION_REF = useRef<HTMLDivElement>(null)
  const [enableInfo, setEnableInfo] = useState(true)
  const [enableConfirm, setEnableConfirm] = useState(true)
  let timerSuggestion: null | ReturnType<typeof setTimeout> = null
  const { isClient } = useContext(UserContext)

  const onFocusInput = event => {
    event.target.select()
  }

  const handleClickEdit = () => {
    if (!enableEditHour && isClient) return
    if (eventLog)
      mode === DEFAULT_MODE
        ? typeof eventLog.hourEdit === 'function' && eventLog.hourEdit()
        : typeof eventLog.suggestedEdit === 'function' && eventLog.suggestedEdit()
    onStartEdition()
    setEnableEdit(true)
    setEnableInfo(false)
    setShowIconAnimation(true)
  }

  const handleCancelHour = () => {
    setChargedHour(hourLoad as string)
    setChargedMinute(minuteLoad as string)
    setEnableConfirm(!(hourLoad === 0 && minuteLoad === 0))
    if (eventLog)
      mode === DEFAULT_MODE
        ? typeof eventLog.hourCancel === 'function' && eventLog.hourCancel()
        : typeof eventLog.suggestedCancel === 'function' && eventLog.suggestedCancel()
    onCloseEdition()
    setEnableEdit(false)
    setEnableInfo(true)
    setDisplayEditOnHover(false)
  }

  const handleAcceptHour = event => {
    if (!enableConfirm) return
    const { currentTarget } = event
    const chargeHourValue = currentTarget === SUGGESTION_REF.current ? +hourLoad : +chargedHour
    const chargeMinuteValue = currentTarget === SUGGESTION_REF.current ? +minuteLoad : +chargedMinute
    const isEdited = +hourLoad !== +chargedHour || +minuteLoad !== +chargedMinute
    const suggestionRefChildren = SUGGESTION_REF.current ? SUGGESTION_REF.current.children : []
    if (isEdited || Array.from(suggestionRefChildren).includes(event.target)) {
      handleClickCheckHour({ hour: chargeHourValue, minutes: chargeMinuteValue, event, bindedData, edited: isEdited })
      if (eventLog)
        mode === DEFAULT_MODE
          ? typeof eventLog.hourConfirm === 'function' && eventLog.hourConfirm()
          : typeof eventLog.suggestedConfirm === 'function' && eventLog.suggestedConfirm()
    }
    onCloseEdition()
    setEnableEdit(false)
    setEnableInfo(true)
    setDisplayEditOnHover(false)
  }

  const handleDelete = event => {
    if (eventLog)
      mode === DEFAULT_MODE
        ? typeof eventLog.hourDelete === 'function' && eventLog.hourDelete()
        : typeof eventLog.suggestedDelete === 'function' && eventLog.suggestedDelete()
    handleDeleteHour({ event, bindedData })
  }

  const hoverInHandler = () => {
    setShowIconAnimation(true)
    setDisplayEditOnHover(true)
    setEnableInfo(false)
  }

  const onHoverInfoIn = () => {
    if (eventLog && !timerSuggestion) {
      timerSuggestion = setTimeout(() => {
        typeof eventLog?.onHoverStay === 'function' && eventLog?.onHoverStay()
      }, 3000)
    }
  }

  const onHoverInfoOut = () => {
    clearTimeout(Number(timerSuggestion))
    timerSuggestion = null
  }

  const hoverOutHandler = () => {
    setDisplayEditOnHover(false)
    setEnableInfo(true)
  }

  useEffect(() => {
    setChargedHour(hourLoad as string)
    setChargedMinute(minuteLoad as string)
    setEnableConfirm(!(hourLoad === 0 && minuteLoad === 0))
  }, [hourLoad, minuteLoad])

  // Eval click de los botones de horas y minutos
  useEffect(() => {
    const evalClick = event => {
      const path = event.path || (event.composedPath && event.composedPath())
      if (
        enableEdit &&
        !HOUR_REF.current?.contains(event.target) &&
        !MINUTE_REF.current?.contains(event.target) &&
        !path.some(({ className }) => className?.includes?.('SCCHWrapper'))
      ) {
        handleCancelHour()
        setDisplayEditOnHover(false)
      }
    }

    document.addEventListener('click', evalClick)

    return () => {
      document.removeEventListener('click', evalClick)
    }
  }, [enableEdit, HOUR_REF, MINUTE_REF])

  useEffect(() => {
    if (stayEdited && enableEditHour) {
      onStartEdition()
      setEnableEdit(true)
      setEnableInfo(false)
    }
  }, [stayEdited])

  // Validate that the value is a number and less than the constant
  const validateNumber = (number: string, maxChar: number): boolean => {
    const regex = /\D/
    return !regex.test(number) && +number < maxChar
  }

  // Remove the zeros to the left of the numbers
  const removeZero = (value: string): string => {
    return value.replace(/^0+/, '')
  }

  const handleChangeHours = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    const inputValue = target.value.length > 1 ? removeZero(target.value) : target.value
    const refHourValue = HOUR_REF?.current?.value
    const refMinuteValue = MINUTE_REF?.current?.value
    if (HOUR_REF?.current === target) {
      if (validateNumber(inputValue, MAX_HOUR) && !estimateEnabled) {
        setChargedHour(inputValue)
      }
      if (validateNumber(inputValue, MAX_HOUR_ESTIMATE) && estimateEnabled) {
        setChargedHour(inputValue)
      }
    }
    if (MINUTE_REF?.current === target) {
      if (validateNumber(inputValue, MAX_MINUTES)) setChargedMinute(inputValue)
    }

    if ((refHourValue === '0' || refHourValue === '') && (refMinuteValue === '0' || refMinuteValue === ''))
      setEnableConfirm(false)
    else setEnableConfirm(true)
  }

  const handleOnKeyPress = event => {
    const { keyCode } = event
    if (keyCode === KEY_ENTER) {
      if (eventLog) typeof eventLog.keyConfirm === 'function' && eventLog.keyConfirm()
      handleAcceptHour(event)
    }
    if (keyCode === KEY_ESCAPE) {
      if (eventLog) typeof eventLog.keyCancel === 'function' && eventLog.keyCancel()
      handleCancelHour()
    }
  }

  const handleOnLeaveInput = event => {
    const { target } = event
    if (!target.value && HOUR_REF.current && HOUR_REF.current === target) HOUR_REF.current.value = '0'
    if (!target.value && MINUTE_REF.current && MINUTE_REF.current === target) MINUTE_REF.current.value = '0'
  }

  const hasThreeDigit = (hour: number | string): boolean => {
    return hour.toString().length > 2
  }

  const loadLabelCharged = () => {
    return enabledDay ? (
      <SCCHLabelHour
        data-robot-id="hours-container-label-hours"
        enableEstimateButton={enableEstimateButton}
        estimateEnabled={estimateEnabled}
        variant={variant}
      >
        <SCCHTime hasThreeDigit={hasThreeDigit(hourLoad)} enableEstimateButton={estimateEnabled}>
          {hourLoad}
        </SCCHTime>
        <SCCHSpace>h </SCCHSpace>
        <SCCHTime enableEstimateButton={estimateEnabled}>{minuteLoad}</SCCHTime>m
      </SCCHLabelHour>
    ) : (
      <SCCHLabelHour data-event="click focus" enableEstimateButton={enableEstimateButton} variant={variant}>
        <SCCHTime enableEstimateButton={estimateEnabled}>{hourLoad}</SCCHTime>
        <SCCHSpace>h </SCCHSpace>
        <SCCHTime enableEstimateButton={estimateEnabled}>{minuteLoad}</SCCHTime>m
      </SCCHLabelHour>
    )
  }

  const loadLabelSuggested = () => {
    return (
      <SCSHLabelHour ref={SUGGESTION_REF} onClick={handleAcceptHour}>
        <SCCHSpace>+ </SCCHSpace>
        <SCCHTime>{hourLoad}</SCCHTime>
        <SCCHSpace>h </SCCHSpace>
        <SCCHTime>{minuteLoad}</SCCHTime>m
      </SCSHLabelHour>
    )
  }

  const handleClickEditEstimation = () => {
    estimateEnabled && !variant && handleClickEdit()
  }

  const wrapperWidth = DEFAULT_WIDTH + (size - DEFAULT_SIZE) * 2
  const backdrop = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <SCCHWrapper mode={mode} wrapperWidth={wrapperWidth} fontSize={fontSize} swapCss={swapCss}>
      <SCCHInfoContainer
        onMouseOver={hoverInHandler}
        onMouseLeave={hoverOutHandler}
        data-testid={`InfoContainerHover${mode}`}
        onClick={handleClickEditEstimation}
      >
        {!enableEdit && (mode === DEFAULT_MODE ? loadLabelCharged() : loadLabelSuggested())}
        {enabledDay && enableEditHour && !enableEdit && displayEditOnHover && (
          <SCCHEditWrapper initial="initial" animate="animate" exit="initial" variants={backdrop}>
            {variant && enableEstimateButton && (
              <ButtonIconCustom
                icon="check"
                iconSize={iconSize}
                size={size}
                onClikAction={handleAcceptHour}
                color="#6F6F6F"
                onHoverColor="#49cf83"
                onHoverBackground="#dbf5e6"
                background="transparent"
                onHoverBorder="#49cf83"
                radius={50}
                borderSize={1}
                borderColor="transparent"
                forTooltip="panel_edit_hours"
                wordingTip={acceptTextTooltip}
                withTip={!!acceptTextTooltip}
                enabled={enableConfirm}
              />
            )}
            <ButtonIconCustom
              icon="pencil-alt"
              iconSize={iconSize}
              size={size}
              color="#6F6F6F"
              onHoverColor="#d9f4ff"
              background="transparent"
              onHoverBackground="#0094ca"
              forTooltip="panel_edit_hours"
              wordingTip={editText}
              onClikAction={handleClickEdit}
              enabled={enableEditHour}
              withTip={!!editText}
              data-selenium="list_item_edit"
              dataTestId="IconEditButtom"
            />
            {enableDeleteHour && (
              <>
                <SCCHButtonSpace space={space} />
                <ButtonIconCustom
                  icon="trash-alt"
                  iconSize={iconSize}
                  size={size}
                  onClikAction={handleDelete}
                  color="#6F6F6F"
                  onHoverColor="#fa1e4c"
                  background="transparent"
                  onHoverBackground="#ffedf1"
                  forTooltip="panel_delete_hours"
                  withTip={!!deleteTextTooltip}
                  wordingTip={deleteTextTooltip}
                  enabled={enableDeleteHour}
                  data-selenium="list_item_delete"
                  data-robot-id="hours-button-delete"
                  dataTestId="IconDeleteButtom"
                />
              </>
            )}
          </SCCHEditWrapper>
        )}
      </SCCHInfoContainer>
      {mode === DEFAULT_MODE && enableInfo && !enableEdit && enableEstimateButton && (
        <SCCHInfoContextContainer>
          <SuggestionButton
            iconSize={iconSuggestionSize}
            size={19}
            position="center"
            enable
            onClick={handleClickEditEstimation}
            content={content}
            place={tooltipPlace}
            variant={iconColor}
            noAnimation={showIconAnimation as boolean}
            grayLogo={grayLogo as boolean}
            zIndex={zIndex}
            withPointer={withPointer}
            onTooltipOpen={onHoverInfoIn}
            onTooltipClose={onHoverInfoOut}
          />
        </SCCHInfoContextContainer>
      )}
      {contextInfo && enableInfo && !enableEstimateButton && (
        <SCCHInfoContextContainer>
          <ButtonIconCustom
            icon="info-circle"
            iconSize={19}
            size={16}
            color="#919191"
            onHoverColor="#d9f4ff"
            background="transparent"
            onHoverBackground="#0094ca"
            forTooltip={`info_suggestion_tab_${tooltipId}`}
            wordingTip={contextInfo}
            onClikAction={() => null}
            enabled
            withTip={!!contextInfo}
            htmlMode
            data-selenium="info_suggestion"
            place="right"
            custom="-sg"
            customPointer="default"
            dataTestId={`ButtonIconCustomEdit${mode}`}
            onTooltipOpen={onHoverInfoIn}
            onTooltipClose={onHoverInfoOut}
          />
        </SCCHInfoContextContainer>
      )}
      {enableEdit && (
        <SCCHEditContainer mode={mode} onKeyDown={handleOnKeyPress}>
          <SCCHInputContainer
            mode={mode}
            enableEdit={enableEdit}
            variant={variant}
            enableEstimateButton={enableEstimateButton}
            estimateEnabled={estimateEnabled}
          >
            {mode === 'suggested' && <SCCHSpace>+ </SCCHSpace>}
            <SCCHInput
              autoFocus
              type="text"
              min="0"
              max="24"
              ref={HOUR_REF}
              value={chargedHour}
              onChange={handleChangeHours}
              data-selenium="list_item_hour_input"
              data-robot-id="hours-load"
              onFocus={onFocusInput}
              fontSize={fontSize}
              mode={mode}
              onBlur={handleOnLeaveInput}
              variant={variant}
              enableEstimateButton={enableEstimateButton}
              estimateEnabled={estimateEnabled}
            />
            <SCCHSpace>h </SCCHSpace>
            <SCCHInput
              type="text"
              min="0"
              max="59"
              ref={MINUTE_REF}
              value={chargedMinute}
              onChange={handleChangeHours}
              data-selenium="list_item_hour_minute"
              data-robot-id="minutes-load"
              onFocus={onFocusInput}
              fontSize={fontSize}
              mode={mode}
              onBlur={handleOnLeaveInput}
              variant={variant}
              enableEstimateButton={enableEstimateButton}
              estimateEnabled={estimateEnabled}
            />
            m
          </SCCHInputContainer>
          <SCCHActionWrapper>
            <ButtonIconCustom
              icon="check"
              iconSize={iconSize}
              size={size}
              onClikAction={handleAcceptHour}
              color="#49cf83"
              onHoverColor="#fff"
              background="#dbf5e6"
              onHoverBackground="#49cf83"
              radius={50}
              borderSize={1}
              borderColor="#49cf83"
              forTooltip="panel_edit_hours"
              wordingTip={acceptTextTooltip}
              withTip={!!acceptTextTooltip}
              enabled={enableConfirm}
              dataTestId="IconAcceptButtom"
            />
            <SCCHButtonSpace space={space} />
            <ButtonIconCustom
              icon="times"
              iconSize={iconSize}
              size={size}
              onClikAction={handleCancelHour}
              color="#6F6F6F"
              onHoverColor="#fa1e4c"
              background="transparent"
              onHoverBackground="#ffedf1"
              forTooltip="cancel_weigh_edition"
              withTip={!!cancelTextTooltip}
              wordingTip={cancelTextTooltip}
              enabled={enableEditHour}
              dataTestId="IconCancelButtom"
            />
          </SCCHActionWrapper>
        </SCCHEditContainer>
      )}
    </SCCHWrapper>
  )
}
