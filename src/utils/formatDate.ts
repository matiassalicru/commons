import { format } from 'date-fns'
import { LOCALE_FORMAT, LOCALE_MAP, SLASH_FORMAT } from '../constants'

/**
 * @param {string} date: date to parse
 * @param {string} formater: function to format a date { format } from date-fns
 * @param {string} lang: current language
 * @param {string} locales: a locale setting { locale } from date-fns
 * @returns {string} date formated
 */

interface formatDateProps {
  date: number | Date
  lang: string
}

export const formatDate = (date: number | Date, lang: string): string => {
  return format(date, LOCALE_FORMAT[lang], {
    locale: LOCALE_MAP[lang],
  })
}

export const formatDateSlash = ({ date, lang }: formatDateProps): string => {
  return format(date, SLASH_FORMAT[lang], {
    locale: LOCALE_MAP[lang],
  })
}
export const getFormatLeaves = (lang = 'es'): string => (lang === 'en' ? 'MMM D YYYY, HH:mm' : 'D MMM YYYY, HH:mm')

export const getFormatModalLeaves = (lang = 'es'): string => (lang === 'en' ? 'MM/DD/YYYY HH:mm' : 'DD/MM/YYYY HH:mm')
