import { useEffect } from 'react'
// Utils
import { validateKeyPress } from '../../utils/validateKeyPress'

/**
 * Listents to a key board event and validate if a given key has been pressed
 * @param keyArray
 * @param callback
 */
export const useKeyPressed = (keyArray: Array<number>, callback: () => void): void => {
  const handleKeyDown = event => validateKeyPress(event, keyArray) && callback()

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })
}
