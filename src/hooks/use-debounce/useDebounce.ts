import { useState, useEffect } from 'react'

/**
 * @param value
 * @param delay amount of time to wait
 * @returns same value as input & ensurance that time-consuming tasks do not fire so often
 */

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
