import { KeyboardEvent } from 'react'

/**
 * Function that returns true if a key given in an array of keyboard keys is pressed
 * @param {Object} event
 * @param {Array} keyCode: array of key codes to validate
 * @returns boolean
 */
export const validateKeyPress = (event: { keyCode: number }, keyCode: Array<number>): boolean => {
  if (keyCode.includes(event.keyCode)) {
    return true
  }
  return false
}

/**
 * Function that prevents the default behaviour of a functionality if a key is pressed
 * @param {string} event
 * @param {Array} keyCode: array of key codes to validate
 */
export const preventAndReturnIfKeyIsPressed = (event: KeyboardEvent, keyCode: Array<number>): void => {
  if (validateKeyPress(event, keyCode)) {
    event.preventDefault()
  }
}
