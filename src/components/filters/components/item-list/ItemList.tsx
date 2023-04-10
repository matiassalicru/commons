import { FunctionComponent, useState, useEffect } from 'react'

// Wording
import { useTranslation } from 'react-i18next'

// UI Components
import Colors from '@projectcor/theme/lib/base/colors'
import { Check } from '@projectcor/icons/lib/components/Check'
import { SvgIcon } from '../../../svg-icon'

// Types
import { ItemListProps } from './ItemList.inteface'

// Styles
import {
  SCWrapper,
  SCText,
  SCIconWrapper,
  SCInformation,
  SCInput,
  SCTooltip,
  SCBorder,
  SCCheckContainer,
} from './styles'

// Constants
import { I18N_SECTION } from '../../../../constants/filters/config'

export const ItemList: FunctionComponent<ItemListProps> = ({
  value = null,
  onSelect = () => null,
  text = '',
  icon = null,
  selected,
  borderColor = '',
  isFocused = false,
  isDisabled = false,
  index,
  visible = true,
}) => {
  const [isChecked, setChecked] = useState(false)
  const { t } = useTranslation(I18N_SECTION)

  useEffect(() => {
    setChecked(selected)
  }, [selected])

  const handleCheck = event => {
    setChecked(event.target.checked)

    onSelect(value)
  }

  return (
    <SCWrapper isChecked={isChecked} isFocused={isFocused} visible={visible}>
      {isDisabled && (
        <SCTooltip
          data-for="full-text-checkbox-filters"
          data-place="right"
          data-tip={t('maxSelection')}
          data-effect="solid"
          data-offset="{'bottom': 10}"
          data-multiline
        />
      )}
      <SCInput
        type="checkbox"
        value={value?.id}
        onChange={handleCheck}
        checked={isChecked}
        disabled={isDisabled}
        data-js={`l2-dropdown-item-${index}`}
        data-robot-id="filters-itemlist-input"
        tabIndex={-1}
      />
      <SCInformation>
        {icon && (
          <SCIconWrapper color={icon.color} data-robot-id="filters-itemlist-info-icon">
            <SvgIcon iconName={icon.name} />
          </SCIconWrapper>
        )}
        {borderColor && <SCBorder borderColor={borderColor} />}
        <SCText data-robot-id="filters-itemlist-info-label">{t(text)}</SCText>
        <SCCheckContainer>
          {isChecked && <Check data-robot-id="filters-userrow-check-icon" color={Colors.primary.main} />}
        </SCCheckContainer>
      </SCInformation>
    </SCWrapper>
  )
}
