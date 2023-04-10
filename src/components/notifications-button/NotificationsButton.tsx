import { ReactElement } from 'react'

import IconButton from '@material-ui/core/IconButton'

import { Notification } from '@projectcor/icons/lib/components/Notification'

import { NotificationsButtonProps } from './NotificationsButton.interface'

import { StyledBadge } from './style'

export const NotificationsButton = ({ notifications }: NotificationsButtonProps): ReactElement => {
  return (
    <>
      {notifications.show && (
        <IconButton onClick={notifications.action} size="small">
          <StyledBadge badgeContent={notifications.badge?.label} color={notifications.badge?.color}>
            <Notification width={32} height={32} />
          </StyledBadge>
        </IconButton>
      )}
    </>
  )
}
