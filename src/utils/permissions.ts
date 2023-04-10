// Sections
export const SECTION_TASK = 'tasks'
export const SECTION_HOURS = 'hours'
export const SECTION_LEAVES = 'leaves'
export const SECTION_TASK_DEADLINE = 'tasks_deadline'
export const SECTION_QUOTATION = 'quotations'
// Actions
export const ACTION_VIEW = 'view'
export const ACTION_EDIT = 'edit'
export const ACTION_CREATE = 'create'
export const ACTION_DELETE = 'delete'
export const ACTION_ARCHIVE = 'archive'
export const ACTION_CREATE_SUBTASK = 'createSubTasks'
/**
 * Util to verify an specific permission from a section
 * @param {object} permissions objeto con todas las secciones y acciones
 * @param {string} section seccion a consultar
 * @param {string} action accion a consultar
 */
export const checkPermissions = (permissions = {}, section = '', action = ''): boolean => {
  return !!permissions?.[section]?.[action]
}
/**
 * Util to verify if datepicker should be available
 * taking in consideration user permissions
 *
 *
 * @param permissionsEditDeadline
 * @param permissionsCreateDeadline
 * @param deadlineValue
 * @returns
 */
export const checkDeadlinePermissions = (
  permissionsEditDeadline: boolean,
  permissionsCreateDeadline: boolean,
  deadlineValue: string | null
) => {
  const disableDatePicker = true

  if ((permissionsCreateDeadline && !deadlineValue) || (permissionsEditDeadline && deadlineValue)) {
    return !disableDatePicker
  }

  return disableDatePicker
}
