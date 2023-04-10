/**
 * Función para generar keys aleatorias para componentes de react
 * @param {string} componentName - Nombre del componente
 * @param {number} index - Indice del componente
 */
export const generateHashKey = (componentName: string, index: number): string => {
  return `${componentName}_${Math.random().toString(36).substring(7)}${index}`
}
