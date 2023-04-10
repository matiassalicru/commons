import { FunctionComponent, useState, useCallback, useEffect } from 'react'
// Wording
import { useTranslation } from 'react-i18next'
// Types
import { ItemListProps } from './ItemList.interface'
// Styles
import { SCWrapper, SCText, SCIconWrapper, SCInformation, SCInput, SCCheckWrapper } from './styles'
// Constants
import { I18N_SECTION } from '../../utils/config'
// UI Components
import { SvgIcon } from '../../../svg-icon'

// TODO: Hacer este componente generico
export const ItemList: FunctionComponent<ItemListProps> = ({
  text,
  onSelect,
  icon = null,
  value = null,
  selected = false,
}) => {
  const [isChecked, setChecked] = useState(false)
  const { t } = useTranslation(I18N_SECTION)

  useEffect(() => {
    setChecked(selected)
  }, [selected])

  const handleCheck = useCallback(
    event => {
      setChecked(event.target.checked)

      onSelect(value)
    },
    [isChecked]
  )

  return (
    <SCWrapper isChecked={isChecked}>
      <SCInput type="checkbox" value={value?.id} onChange={handleCheck} checked={isChecked} />
      <SCInformation>
        {icon && <SCIconWrapper>{icon}</SCIconWrapper>}
        <SCText>{t(text)}</SCText>
      </SCInformation>
      {isChecked && (
        <SCCheckWrapper data-testid="check-icon">
          <SvgIcon iconName="check" />
        </SCCheckWrapper>
      )}
    </SCWrapper>
  )
}
