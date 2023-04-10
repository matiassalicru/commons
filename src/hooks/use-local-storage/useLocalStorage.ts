/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'

interface useLocalStorageProps {
  key: string
  defaultValue: any
}

const getStorageValue = (key: useLocalStorageProps['key'], defaultValue: useLocalStorageProps['defaultValue']): any => {
  const localStorageKey = localStorage.getItem(key)
  return localStorageKey ? JSON.parse(localStorageKey) : defaultValue
}

export const useLocalStorage = (
  key: useLocalStorageProps['key'],
  defaultValue: useLocalStorageProps['defaultValue']
): [any, (value: any) => void] => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue))

  useEffect(() => {
    // Store new value in localStorage key
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
