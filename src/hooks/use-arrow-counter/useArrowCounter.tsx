/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { useState, useEffect, useCallback } from 'react'
import { pressDownArrow, pressUpArrow } from '../../utils/pressArrow/pressArrow'
import { KEY_UP, KEY_DOWN, KEY_ENTER, KEY_TAB, KEY_ESCAPE, KEY_SHIFT, KEY_LEFT, KEY_RIGHT } from '../../constants'

const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'

interface UseArrowCounterProps {
  dataMax: number
  onConfirm: (counter: number) => void
  onExit: () => void
  ignoreNext: boolean
  resetCounter: boolean
  mode?: 'horizontal' | 'vertical'
  disabled?: boolean
}

/**
 *
 * @param {*} dataMax > length de un array a recorrer
 * @param {*} onConfirm > función ejecutada al confirmar
 * @param {*} onExit  > función ejecutada al cancelar
 * @param {*} ignoreNext  > booleano para indicar si hay que cargar información
 * @param {*} resetCounter  > booleano que indica si necesita que se reinicie el contador
 * @param {*} mode  > string que indica el modo de navegacion entre items, por defecto es vertical
 * @param {*} disabled  > booleano que indica si el hook esta deshabilitado
 * @returns > contador con la posición del array
 */

export const useArrowCounter = ({
  dataMax,
  onConfirm,
  onExit,
  ignoreNext = false,
  resetCounter = false,
  mode = 'vertical',
  disabled = false,
}: UseArrowCounterProps): number => {
  /**
   * inicializo un estado para saber cuando es presionada una tecla
   */

  const [counter, setCounter] = useState(0)
  const setInitialCounter = useCallback(() => {
    setCounter(0)
  }, [])

  /* Evitamos que cuando se actualize el maximo de elementos
  si el seleccionado es mayor lo bajamos al maximo
  y si es menor a cero lo ponemos como cero
  (esto seria para el caso cuando dataMax === 0) */
  useEffect(() => {
    if (counter > dataMax) {
      const nextValue = dataMax - 1
      setCounter(nextValue >= 0 ? nextValue : 0)
    }
  }, [dataMax, counter])

  useEffect(() => {
    disabled && setCounter(0)
  }, [disabled])

  /**
   * Con cada tecla presionada un event listener dispara esta función
   */
  function downHandler(e) {
    // declaro una variable que me servirá para actualizar estados
    let nextSelector

    switch (e.keyCode) {
      /**
       * se envian a las funciones el contador actual y el length de un array
       * que recibo como parámetro. Me devuelve un numero que representa
       * al contador
       */
      case KEY_DOWN:
        // si ignore esta como true corta la ejecucion
        if (ignoreNext || mode === HORIZONTAL || disabled) {
          return
        }
        nextSelector = pressDownArrow(counter, dataMax)
        setCounter(nextSelector)
        e.preventDefault()
        break
      case KEY_UP:
        if (mode === HORIZONTAL) {
          return
        }
        nextSelector = pressUpArrow(counter, dataMax)
        setCounter(nextSelector)
        e.preventDefault()
        break
      case KEY_RIGHT:
        // si ignore esta como true corta la ejecucion
        if (ignoreNext || mode === VERTICAL || disabled) {
          return
        }
        nextSelector = pressDownArrow(counter, dataMax)
        setCounter(nextSelector)
        e.preventDefault()
        break
      case KEY_LEFT:
        if (mode === VERTICAL || disabled) {
          return
        }
        nextSelector = pressUpArrow(counter, dataMax)
        setCounter(nextSelector)
        e.preventDefault()
        break
      /**
       * al confirmar acciona la funcion que llegó en los parámetros
       */
      case KEY_ENTER:
        onConfirm(counter)
        resetCounter ? setInitialCounter() : null
        break
      /**
       * Si el usuario presiona una de estas teclas se cerrará la lista
       */
      case KEY_TAB:
      case KEY_ESCAPE:
      case KEY_SHIFT && KEY_TAB:
        onExit()
        resetCounter ? setInitialCounter() : null
        break
      default:
        break
    }
  }

  /**
   * Escucho las teclas presionadas
   */
  useEffect(() => {
    document.addEventListener('keydown', downHandler)
    return () => {
      document.removeEventListener('keydown', downHandler)
    }
  }, [onConfirm, onExit, counter, setCounter, ignoreNext, dataMax])

  /**
   * El hook devuelve el contador actualizado paso a paso, para poder
   * dar una respuesta visual al usuario
   */
  return counter
}
