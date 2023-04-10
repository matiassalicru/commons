/**
 * Función para obtener el peso de un archivo/documento, expresado en
 * "B", "KB", "MB", "GB" y "TB".
 * @param {number} fileSize - Peso del archivo/documento.
 */
export const getFileSize = (fileSize: number): string => {
  const i = Math.floor(Math.log(+fileSize) / Math.log(1024))
  return `${+(+fileSize / 1024 ** i).toFixed(2) * 1} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`
}
