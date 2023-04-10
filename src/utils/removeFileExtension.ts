/**
 * Función remover la extensión de un archivo/documento.
 * @param {string} filename - Nombre del archivo/documento.
 */
export const removeFileExtension = (filename: string): string => {
  return filename.replace(/\.[^/.]+$/, '')
}
