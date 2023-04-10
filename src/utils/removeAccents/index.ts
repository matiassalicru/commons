export const removeAccents = str => {
  if (typeof str === 'string' || typeof str === 'number') {
    return String(str)
      .normalize('NFD')
      ?.replace(/[\u0300-\u036f]/g, '')
  }

  return ''
}
