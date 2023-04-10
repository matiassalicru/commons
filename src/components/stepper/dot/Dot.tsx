import { ReactElement, useCallback } from 'react'
// Styles
import { SCDot } from './style'
// Interface
import { DotProps } from './Dot.interface'

export const Dot = ({ selected, step, onClickDot }: DotProps): ReactElement => {
  const handleClick = useCallback(() => {
    onClickDot(step)
  }, [])
  return <SCDot selected={selected} onClick={handleClick} data-testid="buttonDot" />
}
