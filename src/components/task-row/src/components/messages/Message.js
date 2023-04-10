import React from 'react'
import PropTypes from 'prop-types'

// UI Components
import { Tooltip } from '@projectcor/tooltip/lib'
// Global components
import { SvgIcon } from '../../../../svg-icon'
// Styles
import { SCIconContainer, SCUnreadIndicator } from './style'
// Traducciones
import { useTranslation } from 'react-i18next'

const UNREAD_LIMITED = 99

export function MessageIcon({ totalUnreadMessages = 0, handleClick }) {
  const { t } = useTranslation(['projects'])

  const tooltip = !!totalUnreadMessages
    ? `${totalUnreadMessages} ${t(totalUnreadMessages > 1 ? 'new_messages_count' : 'new_message_count')}`
    : t('see_all_messages')

  return (
    <Tooltip title={tooltip}>
      <SCIconContainer onClick={handleClick} data-testid="icon-container">
        <SvgIcon iconName="comment-dots" />
        <SCUnreadIndicator totalUnreadMessages={totalUnreadMessages} data-testid="total-unread-message">
          {(totalUnreadMessages > UNREAD_LIMITED && `+${UNREAD_LIMITED}`) || totalUnreadMessages}
        </SCUnreadIndicator>
      </SCIconContainer>
    </Tooltip>
  )
}

MessageIcon.propTypes = {
  /**
   * Indica la cantidad de mensages no leídos
   */
  totalUnreadMessages: PropTypes.number,
  /**
   * Accion a realizar cuando se da clic
   */
  handleClick: PropTypes.func,
}
