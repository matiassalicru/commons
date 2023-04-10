import PropTypes from 'prop-types'
import { memo } from 'react'
// Wording
import { useTranslation } from 'react-i18next'
// Global components
import { ButtonIconCustomWithTooltip } from '../../../button-icon-custom'

export const ChargeHoursContainer = memo(
  ({ title, status, taskId, project = {}, deadline, datetime, customCSS, handleClick }) => {
    const { size, color, iconSize, onHoverColor, onHoverBackground } = customCSS

    const { t } = useTranslation('tooltips')

    const IS_INACTIVE_CLIENT = project?.client?.clientStatusId === 3
    /**
     * Abre el modal de carga de horas
     */
    const handleClickChargeHours = () => {
      if (IS_INACTIVE_CLIENT) return
      handleClick({
        title,
        status,
        deadline,
        datetime,
        id: +taskId,
        projectName: project?.name,
        brandName: project?.brandName || project?.brand?.name,
        clientName: project?.clientName || project?.client?.name,
      })
    }

    return (
      <ButtonIconCustomWithTooltip
        size={size}
        color={color}
        icon="hours-icon"
        iconSize={iconSize}
        onHoverColor={onHoverColor}
        wordingTip={IS_INACTIVE_CLIENT ? t('tooltips:inactive_client') : t('tooltips:addHours')}
        onClikAction={handleClickChargeHours}
        onHoverBackground={onHoverBackground}
        isInactiveClient={IS_INACTIVE_CLIENT}
      />
    )
  },
  (prevProps, nextProps) =>
    prevProps.title === nextProps.title &&
    prevProps.status === nextProps.status &&
    prevProps.taskId === nextProps.taskId &&
    prevProps.deadline === nextProps.deadline &&
    prevProps.datetime === nextProps.datetime &&
    prevProps.customCSS === nextProps.customCSS
)
ChargeHoursContainer.propTypes = {
  /**
   * Indica el estado de la tarea
   */
  status: PropTypes.string,
  /**
   * Título de la tarea
   */
  title: PropTypes.string,
  /**
   * ID de la tarea
   */
  taskId: PropTypes.number.isRequired,
  /**
   * Deadline de la tarea
   */
  deadline: PropTypes.string,
  /**
   * Inicio de la tarea
   */
  datetime: PropTypes.string.isRequired,
  /**
   * Datos del project
   */
  project: PropTypes.object,
  /**
   * Objeto que da los estilos del boton accionable
   */
  customCSS: PropTypes.shape({
    size: PropTypes.number,
    iconSize: PropTypes.number,
    color: PropTypes.string,
    onHoverColor: PropTypes.string,
    onHoverBackground: PropTypes.string,
  }).isRequired,
  /**
   * Callback a ejecutar al dar click en el boton
   */
  handleClick: PropTypes.func.isRequired,
}
