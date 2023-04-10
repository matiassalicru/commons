import { useRef, useState, Suspense, useEffect, useCallback, lazy } from 'react'
import PropTypes from 'prop-types'
// Wording
import { useTranslation } from 'react-i18next'
// Styles
import { LYWrapper } from './style'
// Global components
import { Play } from '../../../../play'
import { AlertPortal } from '../../../../alert-portal'
// Constants
import { STOP, PLAY, CT008_ERROR_PLAY, CT004_ERROR_PLAY } from '../../constants/play'
import { STATUS_PROCESS } from '../../constants/status'
// Utils
import timeFromNow from '../../../../../utils/timeFromNow'
import formatHoursMinutesWithLetter from '../../../../../utils/formatHours'
import warnConcatenated from '../../../../../utils/concatenatedStatus'
// Lazy imports
const ModalPortal = lazy(() =>
  import('../../../../modal-portal').then(module => ({
    default: module.ModalPortal,
  }))
)

export const PlayContainer = ({
  title,
  status,
  taskId,
  project = {},
  getLinks,
  dataCounter,
  handleUpdate,
  thisTaskHasPlay,
}) => {
  const { stop, start, playData, stopError, playError, handleDeleteHour } = dataCounter

  const projectTimeKeeper = {
    name: project?.name || null,
    clientName: project?.client_name || null,
    brandName: project?.brand_name || null,
  }

  const BUTTON_REF = useRef(null)

  const [disabled, setDisabled] = useState(false)
  const { active, currentTime, counterId } = playData

  const [showModalStop, setShowModalStop] = useState(false)
  const [showModalMaxHour, setShowModalMaxHour] = useState(false)
  const [concatenatedData, setConcatenatedData] = useState({})
  const [showError, setShowError] = useState({ show: false, message: '' })
  const [showModalConcatenate, setShowModalConcatenate] = useState(false)

  const { t } = useTranslation(['modals', 'alerts', 'counter', 'tooltips', 'task_panel', 'new_hour_modal'])

  /**-------------------Manejo de errores (play/Stop)--------------------- */
  useEffect(() => {
    if (playError) {
      try {
        const icons = document.querySelectorAll(`[data-js='playIcon']:not([data-js-id='playTaskId${taskId}'])`)

        if (playError.code === CT004_ERROR_PLAY) {
          icons.forEach(element => {
            element.style.visibility = 'visible'
          })
          setShowError({
            show: true,
            message: t('new_hour_modal:message_limit'),
          })
        }
        if (playError.code === CT008_ERROR_PLAY) {
          icons.forEach(element => {
            element.style.visibility = 'hidden'
          })
        }
        setDisabled(false)
      } catch (err) {
        setShowError({
          show: true,
          message: t('alerts:errorApi'),
        })
      }
    }
  }, [playError, BUTTON_REF])

  useEffect(() => {
    if (stopError?.message) {
      try {
        const message = JSON.parse(stopError.message)
        const code = message?.code
        if (code === CT004_ERROR_PLAY) {
          setShowModalMaxHour(true)
        }
      } catch (error) {
        setShowError({
          show: true,
          message: t('alerts:errorApi'),
        })
      }
      setDisabled(false)
    }
  }, [stopError, BUTTON_REF])

  /**
   * Elimina la hora
   */
  const deleteHour = useCallback(() => {
    if (stopError?.message) {
      try {
        const { meta } = JSON.parse(stopError.message)
        meta && handleDeleteHour(meta.counterId)
      } catch (error) {
        setShowError({
          show: true,
          message: t('alerts:errorApi'),
        })
      }
    }
    setShowModalMaxHour(false)
  }, [stopError])

  /**
   * Cierra el modal que indica que hay horas en exceso, y da la opción de eliminar la hora
   */
  const handleCloseModalMaxHour = useCallback(() => {
    if (stopError?.message) {
      const message = JSON.parse(stopError.message)
      const meta = message?.meta
      if (!meta?.hoursCharged) {
        handleDeleteHour(meta.counterId)
      }
    }
    setShowModalMaxHour(false)
  }, [stopError])

  const getHoursWithFormat = useCallback(() => {
    let charged = 0
    let noCharged = 0
    if (stopError?.message) {
      const message = JSON.parse(stopError.message)
      const meta = message?.meta
      if (meta) {
        const { hoursCharged, hoursNotCharged } = meta
        charged = formatHoursMinutesWithLetter(hoursCharged)
        noCharged = formatHoursMinutesWithLetter(hoursNotCharged)
      }
    }
    return {
      hoursCharged: charged,
      hoursNotCharged: noCharged,
    }
  }, [stopError])

  const handleAcceptModalMaxHour = useCallback(() => {
    setShowModalMaxHour(false)
  }, [])

  /**
   * Oculta el AlertPortal
   */
  const handleHideError = useCallback(() => {
    setShowError({
      show: false,
      message: '',
    })
  }, [])
  /**---------------------------------------------------------*/

  /**
   * Click en el icono (stop/play)
   */
  const handleClick = async () => {
    const icons = document.querySelectorAll(`[data-js='playIcon']:not([data-js-id='playTaskId${taskId}'])`)
    setDisabled(true)
    if (thisTaskHasPlay) {
      setShowModalStop(true)
    } else {
      try {
        const { data } = await getLinks()
        setConcatenatedData(data.taskLinks)
        //click play
        if (status !== STATUS_PROCESS && warnConcatenated(data.taskLinks).hasDependencies) {
          setShowModalConcatenate(true)
        } else {
          icons.forEach(element => {
            element.style.visibility = 'hidden'
          })

          start({ title, taskID: taskId, projectTimeKeeper }, () => {
            setDisabled(false)
          })

          if (status !== STATUS_PROCESS) {
            handleUpdate({
              status: STATUS_PROCESS,
            })
          }
        }
      } catch (error) {
        setShowError({
          show: true,
          message: t('alerts:errorApi'),
        })
      }
    }
  }

  /**
   * Aceptar modal de concatenación
   */
  const handleAcceptConcatenate = () => {
    const icons = document.querySelectorAll(`[data-js='playIcon']:not([data-js-id='playTaskId${taskId}'])`)

    icons.forEach(element => {
      element.style.visibility = 'hidden'
    })

    const CONCATENATED_UTIL = warnConcatenated(concatenatedData)
    setShowModalConcatenate(false)
    start({ title, taskID: taskId, projectTimeKeeper }, () => setDisabled(false))
    handleUpdate({
      status: STATUS_PROCESS,
      linkOption: {
        option: `delete_${CONCATENATED_UTIL.type}_link`,
        filterByStatus: CONCATENATED_UTIL.status,
        change_type: 'status',
      },
    })
  }

  /**
   * Cierre del modal que indica si está seguro de stopear la tarea
   */
  const handleCloseModal = useCallback(() => {
    setShowModalConcatenate(false)
    setDisabled(false)
  }, [BUTTON_REF])

  /**
   * Retorna las traducciones para los modales
   */
  const translatesModal = useCallback((wordingCustom = false) => {
    return {
      accept: t(`${wordingCustom ? 'general_abm:save' : 'modals:accept'}`),
      cancel: t(`${wordingCustom ? 'counter:delete_hour' : 'modals:cancel'}`),
    }
  }, [])

  /**
   * Handle que acepta stopear una tarea
   */
  const handleAcceptModalStop = useCallback(() => {
    const icons = document.querySelectorAll(`[data-js='playIcon']:not([data-js-id='playTaskId${taskId}'])`)
    icons.forEach(element => {
      element.style.visibility = 'visible'
    })
    stop(
      {
        taskId,
        counterId,
        currentTime,
      },
      () => {
        setDisabled(false)
      }
    )
    setShowModalStop(false)
  }, [taskId, counterId, currentTime, BUTTON_REF])

  /**
   * Handle que cierra el modal que acepta o no stopear una tarea
   */
  const handleCloseModalStop = useCallback(() => {
    setShowModalStop(false)
    setDisabled(false)
  }, [BUTTON_REF])

  return (
    <LYWrapper
      data-js={'playIcon'}
      data-js-id={`playTaskId${taskId}`}
      isPlay={!(active && thisTaskHasPlay)}
      showPlay={thisTaskHasPlay || !active}
    >
      <Play
        taskID={taskId}
        ref={BUTTON_REF}
        hasMargin={false}
        playVariant="normal"
        isDisabled={disabled}
        handleClick={handleClick}
        status={active && thisTaskHasPlay ? STOP : PLAY}
        wordingTip={t(`tooltips:${active && thisTaskHasPlay ? STOP : PLAY}`)}
      />
      <Suspense fallback={<div />}>
        {showModalStop && (
          <ModalPortal
            variant="normal"
            closeModal={handleCloseModalStop}
            translations={translatesModal()}
            clickButtonAccept={handleAcceptModalStop}
            clickButtonCancel={handleCloseModalStop}
            title={t('modals:titleChargeHours')}
            elementId="#modals-portal-taskpanel"
            textContent={t('modals:contentChargeHours', {
              timer: timeFromNow(currentTime),
              title,
            })}
          />
        )}
        {showModalConcatenate && (
          <ModalPortal
            variant="danger"
            closeModal={handleCloseModal}
            translations={translatesModal()}
            clickButtonAccept={handleAcceptConcatenate}
            elementId="#modals-portal-taskpanel"
            clickButtonCancel={handleCloseModal}
            title={t('task_panel:concatenated_dependencies_title_modal')}
            textContent={t('task_panel:concatenated_dependencies', {
              taskName: title,
            })}
          >
            <b>{t('task_panel:concatenated_dependencies_question_modal')}</b>
          </ModalPortal>
        )}
        {showModalMaxHour && (
          <ModalPortal
            variant="normal"
            clickButtonCancel={deleteHour}
            title={t('counter:hours_limit')}
            translations={translatesModal(true)}
            elementId="#modals-portal-taskpanel"
            closeModal={handleCloseModalMaxHour}
            clickButtonAccept={handleAcceptModalMaxHour}
            textContent={t('counter:message_limit', getHoursWithFormat())}
          />
        )}
        {showError.show && (
          <AlertPortal
            position="center-bottom"
            text={showError.message}
            onClose={handleHideError}
            variant="danger"
            icon="check"
            idPortal="alerts-portal"
          />
        )}
      </Suspense>
    </LYWrapper>
  )
}

PlayContainer.propTypes = {
  taskId: PropTypes.number.isRequired,
  /**
   * Datos del project (id, name, client, brand)
   */
  project: PropTypes.object,
  /**
   * Callback que obtiene los links de la tarea
   */
  getLinks: PropTypes.func.isRequired,
}
