import { FunctionComponent, ReactElement, useCallback, useEffect } from 'react'
// Types
import { ItemTypes } from './Item.inteface'
// Styles
import { SCWrapper, SCText, SCIconWrapper, SCStatus } from './styles'
// UI Components
import { SvgIcon } from '../../../svg-icon'
import { KEY_RIGHT } from '../../../../constants'

export const Item: FunctionComponent<ItemTypes> = ({
  data,
  text,
  onClick,
  icon = null,
  isSelected = false,
  hasCustomIcon = null,
}): ReactElement => {
  const handleClick = useCallback(() => {
    onClick(data)
  }, [data])

  const handleClickFromKeyboard = useCallback(
    ({ keyCode }) => {
      if (isSelected && keyCode === KEY_RIGHT) {
        handleClick()
      }
    },
    [isSelected]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleClickFromKeyboard)

    return () => {
      document.removeEventListener('keydown', handleClickFromKeyboard)
    }
  }, [])

  const customIcon = {
    status: <SCStatus />,
  }

  return (
    <SCWrapper onClick={handleClick} isSelected={isSelected}>
      {icon ? (
        <SCIconWrapper data-testid="icon">
          <SvgIcon iconName={icon} />
        </SCIconWrapper>
      ) : (
        hasCustomIcon && <span data-testid="custom-icon">{customIcon[data.id]}</span>
      )}
      <SCText>{text}</SCText>
    </SCWrapper>
  )
}
