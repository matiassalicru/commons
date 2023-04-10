import { useEffect, RefObject } from 'react'

/**
 * Evaluate if a given reference exists and if a click event has ocurred within a target that doesn't contains the reference
 * @param ref
 * @param callback
 */
export const useClickOutside = (ref: RefObject<HTMLInputElement>, callback: () => void): void => {
  const handleClick = ({ target }) => {
    if (ref.current && !ref.current.contains(target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
