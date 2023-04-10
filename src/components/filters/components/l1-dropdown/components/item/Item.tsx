import { FunctionComponent, ReactElement, useCallback, useEffect } from 'react'

// Wording
import { useTranslation } from 'react-i18next'

// Types
import { ItemTypes } from './Item.interface'
// Styles
import { SCWrapper, SCText, SCIconWrapper } from './styles'

// UI Components
import { SvgIcon } from '../../../../../svg-icon'
import { KEY_RIGHT } from '../../../../../../constants'
import { I18N_SECTION } from '../../../../../../constants/filters/config'

export const Item: FunctionComponent<ItemTypes> = ({
  data,
  icon = '',
  text,
  onClick,
  isSelected = false,
}): ReactElement => {
  const { t } = useTranslation(I18N_SECTION)

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

  return (
    <SCWrapper onClick={handleClick} isSelected={isSelected} data-robot-id="filters-item-button">
      {icon && (
        <SCIconWrapper data-robot-id="filters-item-icon">
          <SvgIcon iconName={icon} />
        </SCIconWrapper>
      )}
      <SCText data-robot-id="filters-item-label">{t(text)}</SCText>
    </SCWrapper>
  )
}
