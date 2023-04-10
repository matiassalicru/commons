import { ReactElement } from 'react'
import Colors from '@projectcor/theme/lib/base/colors'
import { SCIHWrapper, SCIHEmptyHour, SCIHWrapperButton } from './style'
import { ChargedHour } from './charged-hour'
import { InputHourProps } from './InputHour.interface'
import { ButtonIconCustomWithTooltip } from '../button-icon-custom'

export const InputHour = ({
  bindedData = undefined,
  chargeEnabled = true,
  content = '',
  contextInfo = '',
  enabledDay = false,
  enableDeleteHour,
  enableEditHour,
  enableEstimateButton = false,
  estimateEnabled = false,
  eventLog,
  fontSize = 16,
  gap = 40,
  handleClickCheckHour = () => null,
  handleDeleteHour = () => null,
  hourLoad = 0,
  iconColor,
  iconSize = 10,
  iconSuggestionSize = 0.9,
  minuteLoad = 0,
  onCloseEdition = () => null,
  onStartEdition = () => null,
  onlySuggestion = false,
  sgEnable = false,
  sgEnableDeleteHour,
  sgEnableEditHour,
  sgHandleClickCheckHour = () => null,
  sgHandleDeleteHour = () => null,
  sgHourLoad = 0,
  sgMinuteLoad = 0,
  size = 19,
  space = 5,
  stayEdited = false,
  tooltipId = '',
  swapPlace = false,
  tooltipPlace,
  variant = false,
  grayLogo = false,
  zIndex = 20,
  withPointer = false,
  enabledComments = false,
  tooltipButtonComments = '',
  iconComments = 'comments-filled',
  iconCommentsSize = 16,
  iconCommentsBgSize = 26,
  iconCommentsColor = Colors.grey[500],
  onClickActionComments = () => null,
  iconCommentsHoverBgColor = Colors.grey[100],
  iconCommentsBgColor = Colors.transparent.main,
  iconCommentsEnabled = false,
  taskIdComments,
  showCommentsIcon,
}: InputHourProps): ReactElement => {
  const enableChangeDeleteHour = !!+hourLoad || !!+minuteLoad
  const enableDelete = enableDeleteHour && enableChangeDeleteHour
  const disableSuggestion = !!+sgHourLoad || !!+sgMinuteLoad

  const replaceLetterEllipsis = (word: string): string => {
    if (word.length > 40) {
      return `${word.slice(0, 40)}...`
    }
    return word
  }

  return (
    <SCIHWrapper gap={gap} estimateEnabled={estimateEnabled} enableComments={enabledComments}>
      {chargeEnabled && !onlySuggestion && (
        <ChargedHour
          bindedData={bindedData}
          contextInfo=""
          enabledDay={enabledDay}
          enableDeleteHour={enableDelete}
          enableEditHour={enableEditHour}
          eventLog={eventLog}
          fontSize={fontSize}
          handleClickCheckHour={handleClickCheckHour}
          handleDeleteHour={handleDeleteHour}
          hourLoad={hourLoad}
          iconSize={iconSize}
          minuteLoad={minuteLoad}
          mode="charged"
          onCloseEdition={onCloseEdition}
          swapCss={swapPlace && 'order: 2;'}
          onStartEdition={onStartEdition}
          size={size}
          space={space}
          variant={!enableEditHour}
        />
      )}
      {sgEnable && disableSuggestion && (
        <ChargedHour
          bindedData={bindedData}
          contextInfo={contextInfo}
          enabledDay
          enableDeleteHour={sgEnableDeleteHour}
          enableEditHour={sgEnableEditHour}
          eventLog={eventLog}
          fontSize={fontSize}
          handleClickCheckHour={sgHandleClickCheckHour}
          handleDeleteHour={sgHandleDeleteHour}
          hourLoad={sgHourLoad}
          iconSize={iconSize}
          minuteLoad={sgMinuteLoad}
          mode="suggested"
          onCloseEdition={onCloseEdition}
          onStartEdition={onStartEdition}
          size={size}
          space={space}
          tooltipId={tooltipId}
          swapCss={swapPlace && 'width: 120px;'}
        />
      )}
      {estimateEnabled && (
        <ChargedHour
          bindedData={bindedData}
          content={content}
          contextInfo={contextInfo}
          enabledDay={enabledDay}
          enableDeleteHour={enableDelete}
          enableEditHour={enableEditHour}
          enableEstimateButton={enableEstimateButton}
          eventLog={eventLog}
          fontSize={fontSize}
          handleClickCheckHour={handleClickCheckHour}
          handleDeleteHour={handleDeleteHour}
          hourLoad={hourLoad}
          iconColor={iconColor}
          iconSize={iconSize}
          iconSuggestionSize={iconSuggestionSize}
          minuteLoad={minuteLoad}
          mode="charged"
          onCloseEdition={onCloseEdition}
          onStartEdition={onStartEdition}
          size={size}
          space={space}
          stayEdited={stayEdited}
          tooltipPlace={tooltipPlace}
          variant={variant}
          grayLogo={grayLogo}
          swapCss={false}
          estimateEnabled={estimateEnabled}
          zIndex={zIndex}
          withPointer={withPointer}
        />
      )}
      {!chargeEnabled && !estimateEnabled && <SCIHEmptyHour> - </SCIHEmptyHour>}
      {showCommentsIcon && !estimateEnabled && (
        <SCIHWrapperButton className="ie-icon-comment" id={`SCIHWrapperButton-${taskIdComments}`}>
          <ButtonIconCustomWithTooltip
            icon={iconComments}
            iconSize={iconCommentsSize}
            color={iconCommentsColor}
            size={iconCommentsBgSize}
            onClikAction={onClickActionComments}
            background={iconCommentsBgColor}
            customPointer="pointer"
            onHoverBackground={iconCommentsHoverBgColor}
            enabled={iconCommentsEnabled}
            wordingTip={replaceLetterEllipsis(tooltipButtonComments)}
            dataTestId="icon-comments"
            place="top"
            customStyleTooltip={{ whiteSpace: 'pre-line' }}
          />
        </SCIHWrapperButton>
      )}
      {swapPlace && !disableSuggestion && <SCIHEmptyHour />}
    </SCIHWrapper>
  )
}
