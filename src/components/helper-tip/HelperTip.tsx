import { ReactElement } from 'react'
import ReactTooltip from 'react-tooltip'
import { HelperTipProps } from './HelperTip.interface'
// Styles
import { SCWrapper, SCLetter } from './style'

export function HelperTip({
  wordingTip = '',
  letterToShow = '?',
  forTooltip = '',
  place = 'top',
  withTip = false,
}: HelperTipProps): ReactElement {
  return (
    <>
      <SCWrapper data-tip={wordingTip} data-for={`helper-tip-${forTooltip}`}>
        <SCLetter>{letterToShow}</SCLetter>
      </SCWrapper>
      {withTip && (
        <ReactTooltip
          className="cor-tooltip"
          effect="solid"
          delayShow={300}
          id={`helper-tip-${forTooltip}`}
          place={place}
        />
      )}
    </>
  )
}
