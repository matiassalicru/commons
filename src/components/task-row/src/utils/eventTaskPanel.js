// Event
export const EVENT_NAME = 'CORTaskPanelEvent'
// Actions
export const ACTION_UPDATE = 'UPDATE_TASK'
export const ACTION_DELETE = 'DELETE_TASK'
export const ACTION_OPEN = 'OPEN_TASK'
export const ACTION_CLOSE = 'CLOSE_TASK'
export const ACTION_CREATE = 'CREATE_TASK'
export const ACTION_USERS = 'UPDATE_USERS'
export const ACTION_ARCHIVE_SUBTASKS = 'ARCHIVE_SUBTASKS'
export const ACTION_DISTRIBUTION = 'UPDATE_DISTRIBUTION'
export const ADD_REWORK = 'ADD_REWORK'
export const ACTION_UPDATE_SUBTASKS = 'UPDATE_SUBTASKS'
// Play actions
export const ACTION_STOP_COUNTER = 'STOP_COUNTER'
export const ACTION_ERROR_START_COUNTER = 'ON_ERROR_START_PLAY'
export const ACTION_START_COUNTER_TIME_KEEPER = 'START_PLAY_TIME_KEEPER'
export const ACTION_STOP_COUNTER_TIME_KEEPER = 'DETAIN_PLAY_TIME_KEEPER'

/**
 * Creacion de evento sobre una accion, para la conexion del task panel con las diferentes secciones
 *
 * @param {*} action
 * @param {*} data
 */
export const eventTaskPanel = (action = '', data = null) => {
  const event = new CustomEvent(EVENT_NAME, {
    detail: {
      action,
      data,
    },
  })
  document.dispatchEvent(event)
}

export default eventTaskPanel
