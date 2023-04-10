const oneThousand = 1000
const oneMillion = 1000000
const aBillion = 1000000000

/**
 * Separa con comas(",") por cantida de miles, y con puntos (".") los decimales.
 * Ej: 100856.56 => 100,856.56
 * @param {integer} value
 */
export const thousandsSeparators = (
  value: number | string,
  thousandSeparator = '.',
  decimalSeparator = ','
): string => {
  const numParts = value.toString().split('.')
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator)
  return numParts.join(decimalSeparator)
}

/**
 * Evalua si el número tiene decimales, si los tiene hace un toFixed() para definir la cantidad.
 * @param {integer} number
 * @param {integer} decimals
 */
export const setDecimals = (
  number: number,
  decimals: number,
  thousandSeparator?: string,
  decimalSeparator?: string
): string => {
  return thousandsSeparators(
    number - Math.floor(number) !== 0 ? number.toFixed(decimals) : number,
    thousandSeparator,
    decimalSeparator
  )
}

/**
 * Formatea números para expresar su valor K(miles), M(millones) y B(billones). También define la cantidad de decimales a utlizar.
 * Ej: 1700000 => 1.7 M
 * @param {integer} number
 * @param {integer} decimals
 * @param {boolean} withOutThousands
 */
export const formatNumber = (number = 0, decimals = 1, withOutThousands = false): string => {
  const normalizedNumber = Math.abs(number)

  if (normalizedNumber < oneThousand || (withOutThousands && normalizedNumber < oneMillion)) {
    return setDecimals(number, decimals)
  }
  if (normalizedNumber >= oneThousand && normalizedNumber < oneMillion) {
    return `${setDecimals(number / oneThousand, decimals)} K`
  }
  if (normalizedNumber >= oneMillion && normalizedNumber < aBillion) {
    return `${setDecimals(number / oneMillion, decimals)} M`
  }
  if (normalizedNumber >= aBillion) {
    return `${setDecimals(number / aBillion, decimals)} B`
  }
  return `${normalizedNumber}`
}

/**
 * Retorna un string ",00" si el número que se le pasa por parámetro es entero.
 * Ej: 1000 => 1000,00
 * @param {integer} number
 */
export const addZeros = (number: number, decimalSeparator = ','): string | boolean =>
  number % 1 === 0 && `${decimalSeparator}00`
