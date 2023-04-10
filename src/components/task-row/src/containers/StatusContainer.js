import { useMemo, useState, Suspense, useContext, useCallback, memo, lazy } from 'react'
import PropTypes from 'prop-types'
// Components
import { useTranslation } from 'react-i18next'
import { StatusSelector } from '../../../status-selector'
// Wording
// Utils
import warnConcatenated from '../../../../utils/concatenatedStatus'
import eventTaskPanel, { ACTION_STOP_COUNTER_TIME_KEEPER } from '../utils/eventTaskPanel'
import isPlayActive from '../utils/play'
// Context
import { UserContext } from '../../../../providers/UserProvider'
// Constants
import { SMALL_SIZE, LARGE_SIZE } from '../constants/task'
import { STATUS_FINISHED, LISTENER_TASK_FINISHED } from '../constants/status'
// Lazy imports
const ModalPortal = lazy(() =>
  import('../../../modal-portal').then(module => ({
    default: module.ModalPortal,
  }))
)

const StatusContainerMemo = ({
  taskId,
  getLinks,
  dataCounter,
  isLargeTask,
  updateStatus,
  currentStatus,
  taskTitle = '',
  handleShowError,
  isInactiveClient = false,
}) => {
  const { isClient, settings } = useContext(UserContext)
  const [links, setLinks] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [statusToUpdate, setStatusToUpdate] = useState('')
  const { t } = useTranslation(['task_panel', 'modals'])

  const verifyConcatenate = useCallback(
    (datalinks, newStatus) => {
      /**
       * Evaluo si la tarea está concatenada.
       */
      if (warnConcatenated(datalinks).hasDependencies) {
        /**
         * Ya que la tarea está concatenada guardo en un estado (statusToUpdate)
         * el valor del status a cambiar. Esto lo hago por si el usuario cancela
         * terminar con las dependencias.
         * Muestro modal que avisa que la tarea tiene dependencias.
         */
        setStatusToUpdate(newStatus)
        setShowModal(true)
      } else {
        /**
         * La tarea no está concatenada y entonces llamo a la función que evalua
         * si detiene el PLAY y también envío a actualizar el nuevo status.
         */
        stopCounter(newStatus)
        handleTaskFinished(newStatus)
        updateStatus({
          status: newStatus,
        })
      }
    },
    [dataCounter]
  )
  /**
   * Detengo el Play si el usuari cambio de estado a FINALIZADA.
   */
  const stopCounter = useCallback(
    newStatus => {
      if (newStatus === STATUS_FINISHED && isPlayActive(taskId)) {
        // dispara evento para stopear el contador en el panel
        eventTaskPanel(ACTION_STOP_COUNTER_TIME_KEEPER, {
          task: { _id: taskId },
        })
      }
    },
    [taskId]
  )

  const handleTaskFinished = useCallback(
    newStatus => {
      if (newStatus === STATUS_FINISHED && dataCounter.playData && typeof dataCounter.stop === 'function') {
        const { taskId: taskIdWithPlay, currentTime, counterId } = dataCounter.playData
        if (String(taskId) === String(taskIdWithPlay)) {
          dataCounter.stop({
            taskId,
            counterId,
            currentTime,
          })
        }
        // TODO: Change when there is a new modal for loading hours
        const taskFinishedEvent = new CustomEvent(LISTENER_TASK_FINISHED, {
          detail: {
            taskId,
          },
        })
        window.dispatchEvent(taskFinishedEvent)
      }
    },
    [dataCounter]
  )
  /**
   * Envio a actualizar el status de la tarea.
   */
  const handleUpdateStatus = useCallback(
    async newStatus => {
      try {
        const { data } = await getLinks()
        setLinks(data.taskLinks)
        verifyConcatenate(data.taskLinks, newStatus)
      } catch (error) {
        handleShowError()
      }
    },
    [dataCounter]
  )

  /**
   * Confirma que el usuario decidió romper con la concatenación.
   */
  const handleAccept = useCallback(() => {
    const CONCATENATED_UTIL = warnConcatenated(links)
    setShowModal(false)
    stopCounter(statusToUpdate)
    handleTaskFinished(statusToUpdate)
    updateStatus({
      status: statusToUpdate,
      linkOption: {
        option: `delete_${CONCATENATED_UTIL.type}_link`,
        filterByStatus: CONCATENATED_UTIL.status,
        change_type: 'status',
      },
    })
  }, [links, statusToUpdate, dataCounter])

  /**
   * Cierro modal de concatenación.
   */
  const handleCloseModal = useCallback(() => setShowModal(false), [])

  const translatesModal = useMemo(() => {
    return {
      accept: t('modals:accept'),
      cancel: t('modals:cancel'),
    }
  }, [])

  const statusWidth = isLargeTask ? LARGE_SIZE : SMALL_SIZE

  const isInDesignStatusAllowed = useMemo(() => settings?.allow_in_design_status === true, [settings])
  const isInReviewStatusAllowed = useMemo(() => settings?.allow_in_revision_status === true, [settings])

  return (
    <>
      <StatusSelector 
        width={4}
        ableToEdit={!isClient && !isInactiveClient}
        boxWidth={statusWidth}
        isInDesignStatusAllowed={isInDesignStatusAllowed}
        isInReviewStatusAllowed={isInReviewStatusAllowed}
        tooltipWording={isInactiveClient ? t('tooltips:inactive_client_status_task') : ''}
        currentStatus={currentStatus}
        updateStatus={handleUpdateStatus}
      />
      <Suspense fallback={<div />}>
        {showModal && (
          <ModalPortal
            variant="danger"
            closeModal={handleCloseModal}
            translations={translatesModal}
            clickButtonAccept={handleAccept}
            elementId="#modals-portal-taskpanel"
            clickButtonCancel={handleCloseModal}
            title={t('task_panel:concatenated_dependencies_title_modal')}
            textContent={t('task_panel:concatenated_dependencies', {
              taskName: taskTitle,
            })}
          >
            <b>{t('task_panel:concatenated_dependencies_question_modal')}</b>
          </ModalPortal>
        )}
      </Suspense>
    </>
  )
}

export const StatusContainer = memo(StatusContainerMemo, (prevProps, nextProps) => {
  return (
    prevProps.taskTitle === nextProps.taskTitle &&
    prevProps.currentStatus === nextProps.currentStatus &&
    prevProps.dataCounter === nextProps.dataCounter
  )
})

StatusContainerMemo.propTypes = {
  /**
   * ID de la tarea
   */
  taskId: PropTypes.number.isRequired,
  /**
   * Callback que obtiene los links de la tarea
   */
  getLinks: PropTypes.func.isRequired,
  /**
   * Callback que ejecuta al actualizar el estado
   */
  updateStatus: PropTypes.func.isRequired,
  /**
   * Status actual
   */
  currentStatus: PropTypes.string.isRequired,
  /**
   * Título de la tarea
   */
  taskTitle: PropTypes.string.isRequired,
  /**
   * Callback para mostrar el alert generico de error
   */
  handleShowError: PropTypes.func.isRequired,
  /**
   * Indica si la tarea tendra los estilos del row grande o no
   */
  isLargeTask: PropTypes.bool.isRequired,
  /**
   * Indica si el cliente asociado a la tarea esta inactivo o no
   */
    isInactiveClient: PropTypes.bool,
  /**
   * Datos necesarios para el Play/Stop
   */
  dataCounter: PropTypes.object.isRequired,
}
