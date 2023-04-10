/**
 * Función para obtener la extensión de un archivo/documento.
 * @param {string} filename - Nombre del archivo/documento.
 */
export const getFileExtension = (filename: string): string => {
  const newFileName = filename.replace(/\.*$/, '')
  const checkRegx = /[^.]+$/.exec(newFileName) as RegExpExecArray
  return checkRegx.length ? checkRegx[0] : ''
}
