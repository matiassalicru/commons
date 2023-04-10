import { useMemo, useState, Suspense, useCallback, lazy } from 'react'
import PropTypes from 'prop-types'
// Wording
import { useTranslation } from 'react-i18next'
// Material UI
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// Global components
import { ButtonIconCustomWithTooltip } from '../../../button-icon-custom'
// Lazy imports
const ModalPortal = lazy(() =>
  import('../../../modal-portal').then(module => ({
    default: module.ModalPortal,
  }))
)
// utils
import isPlayActive from '../utils/play'
import eventTaskPanel, { ACTION_STOP_COUNTER } from '../utils/eventTaskPanel'
// styles
import { makeStyles } from '@material-ui/core/styles'
// Constants
import { STATUS_FINISHED } from '../constants/status'

export const useStyles = makeStyles({
  label: {
    fontSize: '14px',
  },
})

export const ArchiveContainer = ({
  taskId,
  status,
  archived,
  customCSS,
  childQ = 0,
  reload = false,
  afterUpdate = () => {},
  handleUpdate = () => {},
}) => {
  const { size, color, iconSize, onHoverColor, onHoverBackground } = customCSS
  const { t } = useTranslation(['tooltips', 'modals'])
  const playActive = isPlayActive(taskId)
  const [showModal, setShowModal] = useState(false)
  const [valueCheck, setValueCheck] = useState(false)

  const classes = useStyles()
  /**
   * Memorizo el icono
   */
  const icon = useMemo(() => (archived ? 'inbox-out' : 'archive'), [archived])
  /**
   * Memorizo el wording del tooltip del icono
   */
  const wordingTip = useMemo(() => t(archived ? 'unarchive-task' : 'archive-task'), [archived])

  /**
   *  traducciones del modal
   */
  const translatesModal = {
    accept: t('modals:accept'),
    cancel: t('modals:cancel'),
  }

  const showModalArchiveUnArchive = useCallback(() => {
    setShowModal(true)
  }, [])

  /**
   * Click en opcion Archivar/Desarchivar, muestra modal de ser necesario
   */
  const handleClickArchive = () => {
    setValueCheck(false)
    const hasChildren = childQ > 0
    const activePlay = isPlayActive(taskId)
    const isNotFinished = status !== STATUS_FINISHED
    const actionArchive = !archived

    if (actionArchive) {
      /* 
      ARCHIVAR
      Tarea madre desarchivada.
      --> si tiene al menos una subtarea o la tarea no esta finalizada --> modal de confirmación 
      */

      if (isNotFinished || hasChildren) {
        showModalArchiveUnArchive()
        return
      }
    }

    /* 
    DESARCHIVAR
    Tarea madre archivada --> la quiero desarchivar
        --> si tiene al menos una subtarea --> modal de confirmación de desarchivado de subtareas
        --> Si no tiene subtareas-- > no tiro modal de confirmación
     */
    if (!actionArchive && !activePlay && hasChildren) {
      showModalArchiveUnArchive()
      return
    }

    handleUpdateTask({ archived: !archived })
  }

  /**
   * Callback al cerrar el modal
   */
  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  /**
   * Callback que ejecuta la actualizacion de la tarea y que realiza el callback after update
   * @param {Object} fields
   */
  const handleUpdateTask = fields => {
    handleUpdate(fields).then(() => {
      afterUpdate()
    })
  }

  /**
   * Callback boton aceptar del modal
   */
  const handleAcceptModal = () => {
    setShowModal(false)
    const activePlay = isPlayActive(+taskId)

    let fields = {
      archived: !archived,
    }
    if (activePlay) {
      // dispara evento para stopear el contador en el panel
      eventTaskPanel(ACTION_STOP_COUNTER)
    }

    if (!!childQ) {
      fields.archiveSubtasks = valueCheck
    }

    handleUpdateTask(fields)
  }

  /**
   * Handle checkbox del modal
   */
  const handleChangeCheckbox = useCallback(e => {
    setValueCheck(e.target.checked)
  }, [])

  /**
   * Obtiene el titulo del modal
   * @returns String
   */
  const titleModal = useMemo(() => {
    if (!archived) {
      // archivar
      return t('modals:titleArchiveTasks')
    } else {
      // desarchivar
      return t('modals:titleUnarchiveTasks')
    }
  }, [archived])

  /**
   * Retorna el texto que contendrá del modal
   */
  const getTextModal = () => {
    const actionArchive = !archived
    if (actionArchive) {
      /******va a archivar******/

      // si esta corriendo el play
      if (playActive) {
        return t('modals:archiveTaskWithPlay')
      }

      if (status !== STATUS_FINISHED) {
        return t('modals:archiveTaskNoFinished')
      }

      // si tiene hijos
      if (childQ > 0) {
        return ''
      }
    } else {
      /****** va a desarchivar ******/

      // si tiene hijos
      if (childQ > 0) {
        return ''
      }
    }
  }
  return (
    <>
      <ButtonIconCustomWithTooltip
        icon={icon}
        size={size}
        color={color}
        iconSize={iconSize}
        wordingTip={wordingTip}
        onHoverColor={onHoverColor}
        onClikAction={handleClickArchive}
        onHoverBackground={onHoverBackground}
      />
      <Suspense fallback={<div />}>
        {showModal && (
          <ModalPortal
            variant="normal"
            title={titleModal}
            textContent={getTextModal()}
            closeModal={handleCloseModal}
            translations={translatesModal}
            elementId="#modals-portal-taskpanel"
            clickButtonCancel={handleCloseModal}
            clickButtonAccept={handleAcceptModal}
          >
            {childQ > 0 && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={valueCheck}
                    onChange={handleChangeCheckbox}
                    name="subtasks"
                    color="primary"
                    inputProps={{
                      'data-robot-id': 'entity-filter-search-option',
                    }}
                  />
                }
                label={archived ? t('modals:unarchiveSubtasks') : t('modals:archiveSubtasks')}
                key="subtasks-check"
                classes={{ label: classes.label }}
              />
            )}
          </ModalPortal>
        )}
      </Suspense>
    </>
  )
}

ArchiveContainer.propTypes = {
  /**
   * Indica si se realiza el reload
   */
  reload: PropTypes.bool,
  /**
   * Indica la cantidad de subtareas
   */
  childQ: PropTypes.number,
  /**
   * Indica el estado de la tarea
   */
  status: PropTypes.string,
  /**
   * Callback a ejecutar luego de archivar/desarchivar
   */
  afterUpdate: PropTypes.func,
  /**
   *  Callback que actualiza la tarea
   **/
  handleUpdate: PropTypes.func,
  /**
   *  ID de la tarea
   **/
  taskId: PropTypes.number.isRequired,
  /**
   * Indica si la tarea esta archivada o no
   */
  archived: PropTypes.bool.isRequired,
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
}
