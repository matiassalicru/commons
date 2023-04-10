/**
 * Al presionar la tecla para abajo verificara si se encuentra
 * en el final de la lista, si es asi volvera al inicio, si no, sumará
 * uno para bajar en el índice del array
 */
export const pressDownArrow = (selectedItem: number, dataList: number): number => {
  let nextSelector: number = selectedItem + 1

  if (nextSelector > dataList - 1) {
    nextSelector = 0
  }
  return nextSelector
}

/**
 * Al presionar la tecla para arriba verificara si se encuentra
 * en el inicio de la lista, si es asi ira al final, si no, restará uno
 * para subir el índice del array
 */
export const pressUpArrow = (selectedItem: number, dataList: number): number => {
  let nextSelector = selectedItem - 1
  if (nextSelector < 0) {
    nextSelector = dataList - 1
  }
  return nextSelector
}
