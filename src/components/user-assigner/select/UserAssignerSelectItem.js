import { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
// Styles
import { SCUserAssignerSelectItem, SCAvatarWrapper, SCEmail } from './style'
// Global Components
import { UserCapacity } from '../../user-capacity'
import { UserLeaveIcon } from '../../user-leave-icon'
// Global constants
import { ROLE_CLIENT } from '../../../utils/globalConstants'

export function UserAssignerSelectItem({
  user,
  showMe,
  onSelect,
  translations,
  showRoleClient,
  isSelected,
  showTootltipInUser,
  disableScroll = false,
}) {
  const { id, picture, remainingHours, firstName, lastName, roleId, email, leaves } = user
  const itemRef = useRef()
  const handleClick = () => {
    onSelect(user)
  }

  /**
   * Obtiene el wording del tooltip para el usuario segun su role
   * @param {Object} user
   */
  const getTooltipWording = useCallback(() => {
    const { roleId, firstName, lastName, remainingHours, leaves } = user

    let tooltip = ''
    if (+roleId === ROLE_CLIENT && showRoleClient) {
      tooltip = `${firstName} ${lastName} ${translations.tooltipRoleClient || ''}`
    } else {
      tooltip = `${remainingHours} ${translations.tooltipAvailableCapacity || ''} ${firstName} ${lastName}`
    }

    if (
      leaves?.length &&
      translations.licensesTypesNames &&
      translations.leaveDateFormat &&
      translations.leaveTooltipConnect
    ) {
      const { start, end, leaveType } = leaves[0]

      const textUserLeaves = `${translations.licensesTypesNames[leaveType.typeCode]}: ${moment.utc(start)
        .local()
        .format(translations.leaveDateFormat)} ${translations.leaveTooltipConnect} ${moment.utc(end)
        .local()
        .format(translations.leaveDateFormat)}`
      tooltip += `<br><br> ${textUserLeaves}`
    }

    return tooltip
  }, [user, translations])

  useEffect(() => {
    if (isSelected && !disableScroll) {
      itemRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [isSelected])

  let currentLeavesProps = {}
  if (leaves?.length) {
    currentLeavesProps = {
      iconBorderLeft: <UserLeaveIcon typeCode={leaves[0]?.leaveType?.typeCode} width="12px" height="12px" />,
    }
  }

  return (
    <SCUserAssignerSelectItem onClick={handleClick} isSelected={isSelected} ref={itemRef}>
      <SCAvatarWrapper>
        <UserCapacity
          picture={picture}
          remainingHours={remainingHours}
          size="small"
          firstName={firstName}
          lastName={lastName}
          wordingTooltip={getTooltipWording()}
          fromComponent={`user-assigner-select-item-${id}`}
          place="left"
          roleId={showRoleClient ? +roleId : null}
          showTootltip={showTootltipInUser}
          {...currentLeavesProps}
        />
      </SCAvatarWrapper>
      <div>
        {showMe ? translations.me_option : `${firstName} ${lastName}`}
        {email && <SCEmail>{email}</SCEmail>}
      </div>
    </SCUserAssignerSelectItem>
  )
}

UserAssignerSelectItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  translations: PropTypes.object.isRequired,
  /** Indicador para mostrar el icono de usuario tipo cliente en los users */
  showRoleClient: PropTypes.bool,
  /** Flag que indica si se debe mostrar el nombre o un texto que indica que es el usuario loggeado*/
  showMe: PropTypes.bool,
  showTootltipInUser: PropTypes.bool,
  disableScroll: PropTypes.bool,
}
