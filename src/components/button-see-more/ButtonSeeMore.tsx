import { ReactElement } from 'react'
import { ChevronDown } from '@projectcor/icons/lib/components/ChevronDown'
// Style
import { SCButton } from './style'
// Interface
import { ButtonSeeMoreProps } from './ButtonSeeMore.interface'

export const ButtonSeeMore = ({
  text,
  onClickButton = () => null,
  color = '#5a5a5a',
  borderColor = '#a4adb5',
}: ButtonSeeMoreProps): ReactElement => {
  return (
    <SCButton onClick={onClickButton} color={color} borderColor={borderColor}>
      <ChevronDown width="14px" height="14px" color="#5a5a5a" />
      {text}
    </SCButton>
  )
}
