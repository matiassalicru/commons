// eslint-disable-next-line no-use-before-define
import React from 'react'
// Styles
import { Tooltip } from '@projectcor/tooltip/lib'
import { SCButtonPlayStop } from './style'
// Global UI Components
import { SvgIcon } from '../svg-icon'
import { PlayProps, PlayVariant } from './Play.interface'

const STOP = 'stop'

/**
 *
 * Componente que renderiza el icono de play o stop según el status
 *
 * Si el status es "play" renderiza el icono del play
 * Si el status es "stop" renderiza el icono del stop
 *
 * @param {Object} props (taskID, status, handleClick)
 * @param {ref} ref
 *
 */
const PlayComponent = React.forwardRef<HTMLButtonElement, PlayProps>((props: PlayProps, ref) => {
  const {
    status,
    showTooltip = true,
    wordingTip,
    handleClick,
    hasMargin = true,
    playVariant = 'filled',
    dataRobotId,
    isDisabled = false,
    isInactiveClient = false,
  } = props

  return showTooltip ? (
    <Tooltip placement="bottom" title={wordingTip}>
      <SCButtonPlayStop
        ref={ref}
        onClick={handleClick}
        hasMargin={hasMargin}
        disabled={isDisabled}
        isStop={status === STOP}
        data-robot-id={dataRobotId}
        playVariant={playVariant as PlayVariant}
        isInactiveClient={isInactiveClient}
      >
        <SvgIcon iconName={status} />
      </SCButtonPlayStop>
    </Tooltip>
  ) : (
    <SCButtonPlayStop
      ref={ref}
      disabled={isDisabled}
      onClick={handleClick}
      hasMargin={hasMargin}
      isStop={status === STOP}
      data-robot-id={dataRobotId}
      playVariant={playVariant as PlayVariant}
    >
      <SvgIcon iconName={status} />
    </SCButtonPlayStop>
  )
})

/**
 * Memorización del componente PlayComponent
 */
export const Play = React.memo(
  PlayComponent,
  (
    { status, handleClick, isDisabled },
    { status: nextStatus, handleClick: nextHandleClick, isDisabled: nextIsDisabled }
  ) => {
    const hadNoChanges = status === nextStatus && handleClick === nextHandleClick && isDisabled === nextIsDisabled
    return hadNoChanges
  }
)
