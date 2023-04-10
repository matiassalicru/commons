import { ReactElement } from 'react'
import ReactTooltip from 'react-tooltip'
// Styles
import { SCWrapper } from './style'
import { TimerPlayProps } from './TimerPlay.interface'

/**
 *
 * Este componente renderiza el contador de tiempo del play
 *
 * @param {Integer} taskID
 * @param {Boolean} customStyle
 */
export function TimerPlay({ taskID, customStyle = false, wordingTip }: TimerPlayProps): ReactElement {
  return (
    <>
      <SCWrapper
        className={`timeKeeper_${taskID}`}
        data-for={`counter-task-${taskID}`}
        data-tip={wordingTip}
        customStyle={customStyle}
      />
      <ReactTooltip
        place="bottom"
        className="cor-tooltip"
        effect="solid"
        delayShow={300}
        id={`counter-task-${taskID}`}
      />
    </>
  )
}
