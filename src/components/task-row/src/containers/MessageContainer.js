import { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
// Components
import { MessageIcon } from '../components/messages'

const MessageContainerMemo = ({ taskId, totalUnreadMessages = 0, click = () => {} }) => {
  const handleClick = useCallback(() => {
    click('message')
  }, [])

  return <MessageIcon taskId={taskId} totalUnreadMessages={totalUnreadMessages} handleClick={handleClick} />
}

export const MessageContainer = memo(MessageContainerMemo, (prevProps, nextProps) => {
  return prevProps.totalUnreadMessages === nextProps.totalUnreadMessages
})

MessageContainerMemo.propTypes = {
  /**
   * ID de la tarea
   */
  taskId: PropTypes.string,
  /**
   * cantidad de mensajes sin leer
   */
  totalUnreadMessages: PropTypes.number,
  /**
   * Callback que ejecuta al dar click en el icono de mensajes
   */
  click: PropTypes.func.isRequired,
}
