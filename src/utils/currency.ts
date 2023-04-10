import { COLON, EURO, PESO, QUETZAL, REAL } from '../constants'

/*
    Traduccion del typo de currency a symbolo. $,€, etc, en codigo HTML
*/
export const getCurrency = (currency: string): string => {
  switch (true) {
    case PESO.includes(currency):
      return '&#36;'
    case EURO.includes(currency):
      return '&#128;'
    case REAL.includes(currency):
      return 'R&#36;'
    case COLON.includes(currency):
      return '&#8353;'
    case QUETZAL.includes(currency):
      return 'Q'
    default:
      return '&#36;'
  }
}

/*
  Traduccion del typo de currency a symbolo. $,€, etc en String
*/
export const getCurrencySymbol = (currency: string): string => {
  switch (true) {
    case PESO.includes(currency):
      return '$'
    case EURO.includes(currency):
      return '€'
    case REAL.includes(currency):
      return 'R$;'
    case COLON.includes(currency):
      return '₡'
    case QUETZAL.includes(currency):
      return 'Q'
    default:
      return '$'
  }
}
