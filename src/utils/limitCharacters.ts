/**
 * Función para evaluar y limiter caracteres de un texto.
 * @param {string} wordToEvaluate - Contenido del texto.
 * @param {number} limitCharacters - Límite de caracteres.
 */
export const calculateCharacters = (wordToEvaluate: string, limitCharacters: number): string => {
  return wordToEvaluate.length > limitCharacters ? `${wordToEvaluate.substring(0, limitCharacters)}...` : wordToEvaluate
}
