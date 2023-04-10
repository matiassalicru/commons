import { memo, useCallback, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
// Translates
import { useTranslation } from 'react-i18next'
// Global Components
import { Priority } from '../../../priority/current-priority'
// Utils
import { checkPermissions, ACTION_EDIT, SECTION_TASK } from '../../../../utils/permissions'
// Context
import { UserContext } from '../../../../providers/UserProvider'

const TOP_ELEMENT = -137.5
const PriorityContainerMemo = ({ priority, updateTask, isLastElement = false }) => {
  const { t } = useTranslation('task')
  const { permissions } = useContext(UserContext)
  /**
   * Memorizando las traducciones del componente prioridad
   */
  const translations = useMemo(() => {
    return {
      low: t('low'),
      high: t('high'),
      medium: t('medium'),
      urgent: t('urgent'),
    }
  })
  /**
   * Memorizo la validacion de permiso de editar el título
   */
  const permissionsEdit = useMemo(() => checkPermissions(permissions, SECTION_TASK, ACTION_EDIT), [])
  const handleChange = useCallback(priority => {
    updateTask({
      priority: priority.toString(),
    })
  }, [])

  return (
    <Priority
      top={isLastElement ? TOP_ELEMENT : undefined}
      withLabel={false}
      priority={+priority}
      translations={translations}
      ableToEdit={permissionsEdit}
      updatePriority={handleChange}
    />
  )
}

export const PriorityContainer = memo(PriorityContainerMemo, (prevProps, nextProps) => {
  return prevProps.priority === nextProps.priority && prevProps.isLastElement === nextProps.isLastElement
})

PriorityContainerMemo.propTypes = {
  /**
   * prioridad de la tarea
   */
  priority: PropTypes.string.isRequired,
  /**
   * Callback que ejecuta al dar click en el icono de mensajes
   */
  updateTask: PropTypes.func.isRequired,
  /**
   * Flag que indica si es el ultimo de la lista
   */
  isLastElement: PropTypes.bool,
}
