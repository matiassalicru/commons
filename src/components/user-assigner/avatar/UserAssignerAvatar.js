import { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@projectcor/tooltip/lib'
// Styles
import { SCEmptyState } from './style'
// UI Components
import { UserCapacity } from '../../user-capacity'
// Global Components
import { SvgIcon } from '../../svg-icon'

export const UserAssignerAvatarType = {
  PHOTO: 'photo',
  NUMBER: 'number',
  EMPTY_STATE: 'emptyState',
}

export const UserAssignerAvatar = memo(
  ({ avatarMapped, users = [], hideTooltipName = false, translations }) => {
    const { type, picture, total, remainingHours, firstName, lastName } = avatarMapped

    const manyUsersTooltipText = useMemo(() => {
      if (!Array.isArray(users)) {
        return ''
      }

      const USERS_AMOUNT = users?.length

      const text_many = translations.andMoreUsers
        ? translations.andMoreUsers.replace('{{quantity}}', USERS_AMOUNT - 1)
        : ''

      return `${users[0]?.firstName} ${users[0]?.lastName} ${text_many}`
    }, [users])

    if (type === UserAssignerAvatarType.EMPTY_STATE) {
      return (
        <Tooltip title={translations.assig || ''}>
          <SCEmptyState>
            <SvgIcon iconName="user-plus" />
          </SCEmptyState>
        </Tooltip>
      )
    }

    if (type === UserAssignerAvatarType.PHOTO) {
      return (
        <UserCapacity
          picture={picture}
          remainingHours={remainingHours}
          size="small"
          firstName={firstName}
          lastName={lastName}
          wordingTooltip={`${firstName} ${lastName}`}
          fromComponent="user-capacity-photo"
          showTootltip={!hideTooltipName}
        />
      )
    }

    if (type === UserAssignerAvatarType.NUMBER) {
      return (
        <Tooltip title={manyUsersTooltipText}>
          <SCEmptyState>{total}</SCEmptyState>
        </Tooltip>
      )
    }

    return null
  },
  (prevProps, nextProps) => prevProps.avatarMapped === nextProps.avatarMapped && prevProps.users === nextProps.users
)
UserAssignerAvatar.propTypes = {
  avatarMapped: PropTypes.shape({
    type: PropTypes.oneOf(Object.keys(UserAssignerAvatarType).map(type => UserAssignerAvatarType[type])),
    picture: PropTypes.string,
    total: PropTypes.number,
    remainingHours: PropTypes.number,
  }),
  hideTooltipName: PropTypes.bool,
  users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  translations: PropTypes.object.isRequired,
}
