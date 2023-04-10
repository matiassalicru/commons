import { es, enUS, ptBR, fr } from 'date-fns/locale'

export const LOCALE_MAP = {
  en: enUS,
  es,
  br: ptBR,
  fr,
}

/* DATE FORMAT */
export const LOCALE_FORMAT = {
  en: 'MMMM-d-yyyy',
  es: 'd-MM-yyyy',
}

export const SLASH_FORMAT = {
  en: 'MM/dd/yyyy',
  es: 'dd/MM/yyyy',
  fr: 'dd/MM/yyyy',
  br: 'dd/MM/yyyy',
}
