import { FunctionComponent, useEffect, useState, useContext, useMemo, memo } from 'react'
import moment from 'moment'

// Wording
import { useTranslation } from 'react-i18next'
// Components
import Colors from '@projectcor/theme/lib/base/colors'
import { Tooltip } from '@projectcor/tooltip/lib'
import { Check } from '@projectcor/icons/lib/components/Check'
import { UserCapacity } from '../../../user-capacity'
// Styles
import { SCWrapper, SCFullName, SCEmail, SCInfo, SCInput, SCCheckContainer, SCNameContainer } from './style'
// Types
import { UserRowTypes } from './UserRow.interface'
import { AvatarDataTypes } from '../../Filters.interface'
// UI Components
import { UserLeaveIcon } from '../../../user-leave-icon'
// Constants
import { I18N_SECTION } from '../../../../constants/filters/config'
import { getFormatModalLeaves } from '../../../../utils/formatDate'
// Context
import { ContextTypes, FilterContext } from '../../Context'

// TODO: Hacer este componente genérico
export const UserRow: FunctionComponent<UserRowTypes> = memo(
  ({ data, onSelect, selected = false, isFocused = false, isDisabled = false, index, visible = true }) => {
    const [isChecked, setChecked] = useState(false)

    const { id, email, roleId, picture, lastName, firstName, remainingHours, leaves } = data as AvatarDataTypes
    const { t } = useTranslation([I18N_SECTION])

    const { lang } = (useContext(FilterContext) as ContextTypes) || { lang: 'en' }

    const currentLeave = leaves?.length ? leaves[0] : null

    useEffect(() => {
      setChecked(selected)
    }, [selected])

    const handleCheck = event => {
      setChecked(event.target.checked)

      onSelect(data)
    }

    const licensesTypesNames = useMemo(
      () => ({
        UL1: t('employee_info:vacations'),
        UL2: t('employee_info:maternity_paternity'),
        UL3: t('employee_info:marriage'),
        UL4: t('employee_info:death_mourning'),
        UL5: t('employee_info:study_day'),
        UL6: t('employee_info:moving'),
        UL7: t('employee_info:health'),
        UL8: t('employee_info:procedures_a_summons'),
        UL9: t('employee_info:sports'),
        UL10: t('employee_info:training'),
        UL11: t('employee_info:holidays'),
        UL12: t('employee_info:flex_day'),
      }),
      []
    )

    let currentLeavesProps = {}
    if (currentLeave) {
      currentLeavesProps = {
        iconBorderLeft: <UserLeaveIcon typeCode={currentLeave.leaveType?.typeCode} width="12px" height="12px" />,
        wordingTooltip: `${licensesTypesNames[currentLeave.leaveType.typeCode]}: ${moment
          .utc(currentLeave.start)
          .local()
          .format(getFormatModalLeaves(lang))} ${t('employee_info:connector_tooltip')} ${moment
          .utc(currentLeave.end)
          .local()
          .format(getFormatModalLeaves(lang))}`,
      }
    }

    return (
      <Tooltip
        key={`tooltip-${id}`}
        placement="right"
        title={!isDisabled ? `${firstName} ${lastName} ${email}` : t('maxSelection')}
      >
        <SCWrapper isSelected={isChecked} isFocused={isFocused} visible={visible}>
          <SCInput
            type="checkbox"
            data-robot-id="filters-userrow-checkbox-input"
            value={data?.id}
            onChange={handleCheck}
            checked={isChecked}
            disabled={isDisabled}
            isDisabled={isDisabled}
            data-js={`l2-dropdown-item-${index}`}
          />
          <SCInfo>
            <div>
              <UserCapacity
                key={id}
                size="small"
                roleId={roleId}
                picture={picture}
                lastName={lastName}
                firstName={firstName}
                remainingHours={remainingHours}
                {...currentLeavesProps}
              />
            </div>
            <SCNameContainer>
              <SCFullName data-robot-id="filters-userrow-info-fullname-text">
                {firstName} {lastName}
              </SCFullName>
              <SCEmail data-robot-id="filters-userrow-info-email-text">{email}</SCEmail>
            </SCNameContainer>
            <SCCheckContainer>
              {isChecked && <Check data-robot-id="filters-userrow-check-icon" color={Colors.primary.main} />}
            </SCCheckContainer>
          </SCInfo>
        </SCWrapper>
      </Tooltip>
    )
  }
)
