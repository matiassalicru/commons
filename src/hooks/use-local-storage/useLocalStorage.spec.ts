/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react-hooks'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage()', () => {
  test('it is verified that setting a value with useLocalStorage would trigger a localStorage key update', () => {
    const { result } = renderHook(() => useLocalStorage('test', ''))

    // Initial value should be same as default value
    expect(result.current[0]).toBe('')
    // Execute set new value and expect it to be updated
    act(() => {
      result.current[1]('test')
    })
    expect(result.current[0]).toBe('test')
    // Test again with different value
    act(() => {
      result.current[1]('test2')
    })
    expect(result.current[0]).toBe('test2')
  })
})
