// Utils
import moment from 'moment'
import {
  datesManagementsWarnConcatenatedReturn,
  linkOption,
  linksProps,
  verifyDatetimeAndUpdateProps,
} from './utils.interface'

const FORMAT_DATE = 'D MMM, HH:mm'
const FORMAT_DATE_YEAR = 'D MMM YYYY, HH:mm'
const STANDARD_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export const OPTION_ORIGINAL = 'original'
export const OPTION_CHANGE_DATE = 'change_date'
export const OPTION_DELETE_SON_LINK = 'delete_son_link'
export const OPTION_DELETE_FATHER_LINK = 'delete_father_link'
/**
 *
 * Devuelve el formato de fecha al estilo: DD MMM, HH:mm
 * Se contempla si el 'date' es de este mismo año o no
 *
 * @param {string} date
 */
export const specialFormat = (date: string): string => {
  const isSameYear = moment().year() === moment(date).year()
  return isSameYear ? FORMAT_DATE : FORMAT_DATE_YEAR
}

/**
 *
 * Devuelve el formato de la fecha.
 *
 * Evalúa si la fecha esta cerca de los pròximos 7 dias,
 * dependiendo de ello retorna un formato específico,
 * sino está en ese rango retorna el método "specialFormat"
 *
 * @param {String} date Fecha en formato 'YYYY-MM-DD HH:mm:ss
 * @param {Object} translate objeto que contiene las traducciones
 * @returns
 */
export const formatFewDays = (date: string, translate: { today; tomorrow; moreDays }): string => {
  const dateFormated = moment(date).format('YYYY-MM-DD')
  const today = moment().format('YYYY-MM-DD')
  const diff = moment(dateFormated).diff(today, 'days')

  if (!diff) {
    return `[${translate.today},] HH:mm`
  }
  if (diff === 1) {
    return `[${translate.tomorrow}]`
  }
  if (diff > 1 && diff < 8) {
    return `[${translate.moreDays}]`
  }
  return specialFormat(date)
}

/**
 * Retorna un objeto con el caso default de concatenación
 * @param {String} datetime
 * @param {String} oldDatetime
 * @param {String} deadline
 * @param {String} oldDeadline
 * @returns
 */
function defaultLinkOption(
  datetime: string,
  oldDatetime: string,
  deadline: string | null,
  oldDeadline: string
): linkOption {
  return {
    change_type: 'date',
    option: OPTION_CHANGE_DATE,
    data: {
      date_diff: moment(datetime).diff(oldDatetime, 'days'),
      deadline_diff: moment(deadline).diff(oldDeadline, 'days'),
    },
  }
}

/**
 *
 * Se verifica que tipo de concatenación tiene la tarea dependiendo de los parámetros
 * @param {Object} links
 * @param {String} datetime  YYYY-MM-DD HH:mm:ss
 * @param {String} oldDatetime  YYYY-MM-DD HH:mm:ss
 * @param {String} deadline  YYYY-MM-DD HH:mm:ss
 * @param {String} oldDeadline  YYYY-MM-DD HH:mm:ss
 * @param {Number} projectId
 * @returns
 */
export const warnConcatenated = (
  links: linksProps,
  datetime: string,
  oldDatetime: string,
  deadline: string | null,
  oldDeadline: string,
  projectId: number
): datesManagementsWarnConcatenatedReturn => {
  // Si tiene tareas predecesora
  if (links?.source.length) {
    const changeDatetime = datetime !== oldDatetime
    const changeDeadline = deadline !== oldDeadline
    // Si es la ultima tarea - es decir la tarea que tiene predecesora pero no tiene sucesoras
    if (!links.target.length && changeDeadline) {
      return {
        showModal: false,
        linkOption: {
          option: OPTION_ORIGINAL,
        },
      }
    }
    // Se analiza primero si cambió el datetime
    if (changeDatetime) {
      // Se busca si el datetime seleccionado es menor a algun deadline de sus predecesores
      const dependence = links.source.some(src => moment(datetime).isSameOrBefore(src.deadline))
      if (dependence) {
        // Se busca el mejor predecesor. El mejor source es aquel que tenga el mayor deadline
        const bestElement = links.source.reduce((previousElement, actualElement) => {
          if (moment(previousElement.deadline).isSameOrAfter(actualElement.deadline)) {
            return previousElement
          }
          return actualElement
        })
        // se calcula la cantidad de dias de diferencia entre el deadline y datetime seleccionada
        const dayDiff = moment(deadline).diff(datetime, 'days')
        // se construye el nuevo datetime apartir del mejor elemento encontrado
        const newDatetime = moment(bestElement.deadline).add(1, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss')
        // se construye el nuevo deadline apartir del nuevo datetime construido, sumandole la cantidad de dias calculadas anteriormente
        const newDeadline = moment(newDatetime).add(dayDiff, 'days').endOf('day').format('YYYY-MM-DD HH:mm:ss')

        return {
          showModal: true,
          deleteOption: {
            datetime,
            deadline,
            linkOption: {
              ...defaultLinkOption(datetime, oldDatetime, deadline, oldDeadline),
              filterByDate: datetime,
              filterByDeadline: deadline,
              filterByProject: projectId,
              option: OPTION_DELETE_FATHER_LINK,
            },
          },
          changeDate: {
            datetime: newDatetime,
            deadline: newDeadline,
            linkOption: {
              ...defaultLinkOption(newDatetime, oldDatetime, newDeadline, oldDeadline),
              filterByDate: datetime,
              filterByDeadline: deadline,
              filterByProject: projectId,
            },
          },
        }
      }
    }
    // Si fue modificado solo el deadline o si no hay ningun tipo de dependencia con tareas padres
    return {
      showModal: false,
      linkOption: defaultLinkOption(datetime, oldDatetime, deadline, oldDeadline),
    }
  }
  // Si tiene tareas sucesoras
  if (links?.target.length)
    return {
      showModal: false,
      linkOption: defaultLinkOption(datetime, oldDatetime, deadline, oldDeadline),
    }

  return { showModal: false }
}

/**
 *
 * Manejo del cambio del start (datetime), donde se evalúa si el start seleccionado es igual o superior al deadline actual,
 * de ser así se modifica el deadline, sumandole la cantidad de minutos estimadas en la tarea.
 *
 * Se busca si la tarea tiene dependencias de finish to start
 *
 * @param {String} start fecha del comienzo de la tarea YYYY-MM-DD HH:mm:ss
 * @param {String} deadline fecha de la finalización de la tarea YYYY-MM-DD HH:mm:ss
 * @param {Integer} projectId ID del proyecto de la tarea
 * @param {String} estimated Cantidad en minutos de la estimacion de la tarea
 * @param {moment} dateChanged Objeto de tipo moment con la fecha que acaba de ser seleccionada
 * @param {Object} concatenatedData Objeto que contiene información de la concatenación de la tarea
 * @param {function} callbackUpdate callback a ejecutar
 *
 */
export const verifyDatetimeAndUpdate = ({
  start,
  deadline,
  projectId,
  estimated,
  dateChanged,
  concatenatedData,
  callbackUpdate,
}: verifyDatetimeAndUpdateProps): void => {
  const newStart = dateChanged?.format(STANDARD_FORMAT)
  // Si el nuevo datetime es igual o posterior al deadline se modifica tanto el campo deadline como el campo datetime
  let newDeadline = deadline
  if (dateChanged?.isSameOrAfter(deadline)) {
    const dateClone = dateChanged.clone()
    newDeadline = dateClone.add(estimated, 'minutes').format(STANDARD_FORMAT)
  }
  const concatenate = warnConcatenated(concatenatedData, newStart, start, newDeadline, deadline, projectId)

  callbackUpdate(newStart, newDeadline, concatenate)
}

/**
 * Manejo del cambio del deadline, donde se evalúa si el deadline seleccionado es igual o inferior al start (datetime) actual,
 * de ser así se modifica el start, restandole la cantidad de minutos estimadas en la tarea
 *
 * @param {String} start fecha del comienzo de la tarea YYYY-MM-DD HH:mm:ss
 * @param {String} deadline fecha de la finalización de la tarea YYYY-MM-DD HH:mm:ss
 * @param {String} estimated Cantidad en minutos de la estimacion de la tarea
 * @param {Integer} projectId ID del proyecto de la tarea
 * @param {moment} dateChanged Objeto de tipo moment con la fecha que acaba de ser seleccionada
 * @param {Boolean} permissionDelete Verifica si se puede eliminar o no el deadline
 * @param {Object} concatenatedData Objeto que contiene información de la concatenación de la tarea
 * @param {function} callbackUpdate callback a ejecutar
 */
export const verifyDeadlineAndUpdate = ({
  start,
  deadline,
  estimated,
  projectId,
  dateChanged,
  permissionDelete,
  concatenatedData,
  callbackUpdate,
}: verifyDatetimeAndUpdateProps): void => {
  if (!dateChanged && !permissionDelete) return
  const newDeadline = dateChanged?.format(STANDARD_FORMAT) || null
  let newStart = start
  // Si el nuevo deadline es igual o anterior al start se modifica tanto el campo deadline como el campo datetime
  if (dateChanged?.isSameOrBefore(start)) {
    const dateClone = dateChanged.clone()
    newStart = dateClone.subtract(estimated, 'minutes').format(STANDARD_FORMAT)
  }
  const concatenate = warnConcatenated(concatenatedData, newStart, start, newDeadline, deadline, projectId)

  callbackUpdate(newStart, newDeadline, concatenate)
}
