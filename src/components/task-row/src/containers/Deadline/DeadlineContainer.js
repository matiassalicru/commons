import React, { useState, useMemo, useCallback, Suspense, useContext, memo } from 'react'
import PropTypes from 'prop-types'
// Utils
import moment from 'moment'
import { useTranslation } from 'react-i18next'
// Material
import { FormControl, FormControlLabel, Radio, RadioGroup, withStyles } from '@material-ui/core'
import {
  formatFewDays,
  specialFormat,
  verifyDeadlineAndUpdate,
  OPTION_DELETE_FATHER_LINK,
  OPTION_CHANGE_DATE,
} from '../../../../../utils/datesManagement'
import { checkPermissions, ACTION_EDIT, ACTION_DELETE, SECTION_TASK_DEADLINE } from '../../../../../utils/permissions'
// UI Components
import { Datetime } from '../../../../datetime'
// Context
import { UserContext } from '../../../../../providers/UserProvider'
// Layout Components
import { SCFormModal } from './style'
import { STATUS_FINISHED } from '../../constants/status'
// Lazy imports
const ModalPortal = React.lazy(() =>
  import('../../../../modal-portal').then(module => ({
    default: module.ModalPortal,
  }))
)

const DarkRadio = withStyles({
  root: {
    color: '#000',
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />)

export const DeadlineContainer = memo(
  ({
    title,
    taskId,
    status,
    datetime,
    getLinks,
    estimated,
    projectId,
    updateTask,
    deadline = null,
    handleShowError,
  }) => {
    const { t } = useTranslation(['tooltips', 'datepicker, task_panel, modals'])
    const { lang, permissions } = useContext(UserContext)
    moment.locale(lang === 'br' ? 'pt-br' : lang)

    const [dataConcatenate, setDataConcatenate] = useState({})
    const [showModalConcatenate, setShowModalConcatenate] = useState(false)
    const [optionValue, setOptionValue] = useState(OPTION_DELETE_FATHER_LINK)

    /**
     * Memorizo la validacion de permiso de editar deadline
     */
    const permissionsEditDeadline = useMemo(() => checkPermissions(permissions, SECTION_TASK_DEADLINE, ACTION_EDIT), [])
    /**
     * Memorizo la validacion de permiso de eliminar un deadline
     */
    const permissionsDeleteDeadline = useMemo(
      () => checkPermissions(permissions, SECTION_TASK_DEADLINE, ACTION_DELETE),
      []
    )
    /**
     * Retorna un objeto que contiene las traducciones a usar en el componente Datetime
     */
    const translationsDatepicker = useMemo(() => {
      return {
        ok: t('datepicker:ok'),
        clear: t('datepicker:clear'),
        today: t('datepicker:today'),
        addDate: t('datepicker:addDate'),
        cancel: t('datepicker:cancel'),
      }
    }, [])

    /**
     * Retorna un objeto con las traducciones de "hoy, mañana, en X días"
     */
    const stringDatePreview = useMemo(() => {
      const today = moment().format('YYYY-MM-DD')
      const dateFormated = moment(deadline).format('YYYY-MM-DD')
      const diff = moment(dateFormated).diff(today, 'days')
      return {
        today: t('datepicker:today'),
        tomorrow: t('datepicker:tomorrow'),
        moreDays: t('datepicker:moreDays', { days: diff }),
      }
    }, [deadline])

    /**
     * Retorna un string con el formato de la fecha,
     * Se verifica si la fecha está dentro de los proximos 7 dias para
     * usar el objeto con las traducciones que se envia como segundo parámetro,
     * sino retorna un formato estandar.
     */
    const formatDate = useMemo(() => {
      return formatFewDays(deadline, stringDatePreview)
    }, [deadline])

    /**
     * Retorna un string con el tooltip correspondiente, dependiendo del deadline que está seteado
     */
    const tooltipsDeadline = useMemo(() => {
      const today = moment().format('YYYY-MM-DD HH:mm')
      const momentDate = deadline ? moment(deadline) : null
      const days = deadline ? moment(deadline).toNow('dd') : null
      const hrs = deadline ? moment(deadline).format('HH:mm') : null

      if (momentDate === null) {
        if (!permissionsEditDeadline) return
        return t('tooltips:deadline')
      }
      if (momentDate.isBefore(today)) {
        return t('tooltips:taskEnded', { days, hrs })
      }
      if (momentDate.isAfter(today)) {
        return t('tooltips:tasksEnds', { days, hrs })
      }
      if (momentDate.isSame(moment().format('YYYY-MM-DD'), 'day')) {
        return t('tooltips:tasksEndsToday', { hrs })
      }
    }, [deadline])

    /**
     * Retorna un boolean, que indica si la fecha está o no expirada,
     * tomando en cuenta el estado de la tarea
     */
    const isExpired = useMemo(() => {
      if (status === STATUS_FINISHED) {
        return false
      }
      return moment(deadline).isBefore(moment())
    }, [status, deadline])

    /**
     *
     * Se evalua si se debe mostrar el modal de concatenación o no,
     * En caso de que no, se actualiza las fechas
     *
     * @param {string} newStart  YYYY-MM-DD HH:mm:ss
     * @param {string} newDeadline YYYY-MM-DD HH:mm:ss
     * @param {Object} concatenate Objeto con información adicional para actualizar la fecha
     */
    const handleUpdateDeadline = useCallback((newStart, newDeadline, concatenate) => {
      if (concatenate?.showModal) {
        setDataConcatenate(concatenate)
        setShowModalConcatenate(true)
      } else {
        const { linkOption } = concatenate

        updateTask({
          datetime: newStart,
          deadline: newDeadline,
          linkOption,
        })
      }
    }, [])

    /**
     * Callback que se ejecuta al cambiar la fecha
     */
    const changeDeadline = useCallback(
      async dateChanged => {
        try {
          const {
            data: { taskLinks: concatenatedData },
          } = await getLinks()
          verifyDeadlineAndUpdate({
            start: datetime,
            deadline,
            estimated,
            projectId,
            dateChanged,
            permissionDelete: permissionsDeleteDeadline,
            concatenatedData,
            callbackUpdate: handleUpdateDeadline,
          })
        } catch (error) {
          handleShowError()
        }
      },
      [datetime, deadline, estimated]
    )

    // ------------------Modal concatenación-------------------

    /**
     * Cambio de opción del radio button en el modal de concatenación
     */
    const handleChangeOptionModal = useCallback(event => {
      setOptionValue(event.target.value)
    }, [])
    /**
     * Formateo de fechas propuestas en el modal de concatenación
     */
    const wordingModal = useMemo(() => {
      const formatDatetime = specialFormat(datetime)
      const formatDeadline = specialFormat(deadline)
      const datetimeWording = dataConcatenate?.changeDate?.datetime
      const deadlineWording = dataConcatenate?.changeDate?.deadline
      return {
        datetime: moment(datetimeWording).format(formatDatetime),
        deadline: moment(deadlineWording).format(formatDeadline),
      }
    }, [dataConcatenate])

    /*
     * Cierre del modal de concatenación
     */
    const handleCloseModalConcatenate = useCallback(() => {
      setShowModalConcatenate(false)
    }, [])

    /**
     * Aceptar modal de concatenación
     */
    const handleAcceptConcatenate = useCallback(() => {
      if (optionValue === OPTION_DELETE_FATHER_LINK && dataConcatenate?.deleteOption) {
        updateTask(dataConcatenate.deleteOption)
      } else if (optionValue === OPTION_CHANGE_DATE) {
        updateTask(dataConcatenate.changeDate)
      }
      setShowModalConcatenate(false)
    }, [dataConcatenate, optionValue])

    const translatesModal = useMemo(() => {
      return {
        accept: t('modals:accept'),
        cancel: t('modals:cancel'),
      }
    }, [])
    return (
      <>
        <Datetime
          clearable={permissionsDeleteDeadline}
          defaultDate={deadline}
          disabled={!permissionsEditDeadline}
          emptyLabel={false}
          format={formatDate}
          handleUpdate={changeDeadline}
          icon={false}
          id={taskId}
          isExpired={isExpired}
          lang={lang}
          tooltip={tooltipsDeadline}
          translations={translationsDatepicker}
        />
        <Suspense fallback={<div />}>
          {showModalConcatenate && (
            <ModalPortal
              elementId="#modals-portal-taskpanel"
              closeModal={handleCloseModalConcatenate}
              clickButtonCancel={handleCloseModalConcatenate}
              clickButtonAccept={handleAcceptConcatenate}
              title={t('task_panel:concatenated_dependencies_title_modal')}
              variant="danger"
              textContent={t('task_panel:concatenated_dependencies', {
                taskName: title,
              })}
              translations={translatesModal}
            >
              <FormControl component="fieldset">
                <SCFormModal>
                  <RadioGroup
                    aria-label="concatenateOption"
                    name="concatenateOption"
                    value={optionValue}
                    onChange={handleChangeOptionModal}
                  >
                    <FormControlLabel
                      value={OPTION_DELETE_FATHER_LINK}
                      control={<DarkRadio />}
                      label={t('task_panel:concatenated_dependencies_question_modal')}
                    />
                    <FormControlLabel
                      value={OPTION_CHANGE_DATE}
                      control={<DarkRadio />}
                      label={t('task_panel:concatenated_change_date', wordingModal)}
                    />
                  </RadioGroup>
                </SCFormModal>
              </FormControl>
            </ModalPortal>
          )}
        </Suspense>
      </>
    )
  },
  (prevProps, nextProps) =>
    prevProps.datetime === nextProps.datetime &&
    prevProps.estimated === nextProps.estimated &&
    prevProps.deadline === nextProps.deadline &&
    prevProps.status === nextProps.status &&
    prevProps.updateTask === nextProps.updateTask
)

DeadlineContainer.propTypes = {
  /**
   * título de la tarea
   */
  title: PropTypes.string.isRequired,
  /**
   * ID de la tarea
   */
  taskId: PropTypes.string.isRequired,
  /**
   * Callback que obtiene los links de la tarea
   */
  getLinks: PropTypes.func.isRequired,
  /**
   * Status actual
   */
  status: PropTypes.string.isRequired,
  /**
   * Fecha de ginalización de la tarea
   */
  deadline: PropTypes.string,
  /**
   * Estimacion de la tarea en minutos
   */
  estimated: PropTypes.string.isRequired,
  /**
   * Fecha de inicio de la tarea
   */
  datetime: PropTypes.string.isRequired,
  /**
   * ID del proyecto
   */
  projectId: PropTypes.number,
  /**
   * Callback para mostrar el alert generico de error
   */
  handleShowError: PropTypes.func.isRequired,
}
