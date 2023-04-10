interface hoursFormat {
  h: number
  m: number
}

interface hoursFormatWithLetters {
  firstPart: string
  secondPart: string
}

const numberToHoursMinute = (hours = 0): hoursFormat => {
  const timer = {} as hoursFormat
  timer.h = Math.floor(hours)
  const minutes = (hours - timer.h) * 60
  timer.m = Math.ceil(minutes)

  return timer
}

/**
 * Fomato 10h:30m a partir de un valor en horas ejemplo 10.5hrs
 * @param number
 * @param nonzero
 * @returns {string}
 */

export default function formatHoursMinutesWithLetter(number = 0, nonzero = false): string {
  let result = ''
  const { h, m } = numberToHoursMinute(number)
  result = `${h} h ${m} m`

  if (nonzero) {
    result = `${h} h `
    result += m !== 0 ? `${m} m` : ''
  }

  return result
}

const formatHoursMinutes = (number = 0) => {
  return numberToHoursMinute(number)
}

/**
 * Fomato 10h:30m / 10h:30m a partir de 2 valores en horas ejemplo 10.5hrs y 10.5hrs
 * @param number
 * @param nonzero
 * @param total
 * @returns {Array}
 */
export const formatHoursMinutesWithLetterAndDivision = (
  number = 0,
  nonzero = false,
  total = 0
): hoursFormatWithLetters => {
  const { h, m } = formatHoursMinutes(number)
  const totalHoursMinutes = formatHoursMinutes(total)
  if (nonzero)
    return {
      firstPart: `${h} h ${m !== 0 ? `${m} m` : ''}`,
      secondPart: `${totalHoursMinutes.h} h${totalHoursMinutes.m !== 0 ? ` ${totalHoursMinutes.m} m.` : '.'}`,
    }

  return {
    firstPart: `${h} h ${m} m`,
    secondPart: `${totalHoursMinutes.h} h ${totalHoursMinutes.m} m`,
  }
}
