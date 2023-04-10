import { useState, useEffect, useMemo } from 'react'
// Wording
import { useTranslation } from 'react-i18next'
// COR-UI
import Colors from '@projectcor/theme/lib/base/colors'
import { Tooltip } from '@projectcor/tooltip/lib'
import { Check } from '@projectcor/icons/lib/components/Check'
// Styles
import { SCPositionName, SCCategoryName, SCInfoWrapper } from './style'
import { SCInput, SCCheckContainer, SCWrapper } from '../user-row/style'
// Constants
import { I18N_SECTION, NO_POSITION } from '../../../../constants/filters/config'
import { IUserPositionsRow } from './UserPositionRow.interface'

export const UserPositionsRow = ({
  categoryName,
  name,
  id,
  onSelect,
  selected = false,
  isFocused = false,
  isDisabled = false,
  index,
  visible = true,
}: IUserPositionsRow) => {
  const { t } = useTranslation([I18N_SECTION])
  const [isChecked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(selected)
  }, [selected])

  const handleCheck = event => {
    setChecked(event.target.checked)

    onSelect({
      id,
      name,
      categoryName,
    })
  }

  const positionName = useMemo(() => (name === NO_POSITION ? t(NO_POSITION) : name), [name])

  return (
    <Tooltip
      key={`tooltip-${id}`}
      placement="right"
      title={!isDisabled ? `${positionName} ${categoryName}` : t('maxSelection')}
    >
      <SCWrapper isSelected={selected} isFocused={isFocused} visible={visible}>
        <SCInput
          type="checkbox"
          data-robot-id="filters-user-positions-row-checkbox-input"
          value={id}
          onChange={handleCheck}
          checked={isChecked}
          isDisabled={isDisabled}
          data-js={`l2-dropdown-item-${index}`}
        />
        <SCInfoWrapper>
          <SCPositionName onClick={onSelect} data-robot-id="filters-user-position-row-fullname-text">
            {positionName}
          </SCPositionName>
          <SCCategoryName data-robot-id="filters-user-position-row-category-name-text">{categoryName}</SCCategoryName>
        </SCInfoWrapper>
        <SCCheckContainer>
          {isChecked && <Check data-robot-id="filters-userrow-check-icon" color={Colors.primary.main} />}
        </SCCheckContainer>
      </SCWrapper>
    </Tooltip>
  )
}
