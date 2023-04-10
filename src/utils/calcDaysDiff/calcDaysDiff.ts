import moment from 'moment'
/**
 * @param {string | Date} startDate
 * @param {string | Date} endDate
 * @returns {number} difference in days
 */

export const calcDaysDiff = (startDate: string | Date, endDate: string | Date): number => {
  const miliSecondsDiff = moment(endDate).diff(moment(startDate))
  const daysDiff = moment.duration(miliSecondsDiff).asDays()
  return Math.floor(daysDiff)
}
