/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/react'
// hook
import { useArrowCounter } from '.'
// constans
import { KEY_UP, KEY_DOWN, KEY_ENTER, KEY_TAB, KEY_ESCAPE, KEY_RIGHT, KEY_LEFT } from '../../constants'

const dataMax = 3
const onConfirm = jest.fn()
const onExit = jest.fn()
const ignoreNext = false
const resetCounter = false
const mode = 'vertical'
const disabled = false

const params = {
  dataMax,
  onConfirm,
  onExit,
  ignoreNext,
  resetCounter,
  mode,
  disabled,
}

describe('useArrowCounter()', () => {
  test('it is verified that pressing ArrowUp behaves as expected', () => {
    const { result, unmount } = renderHook(() => useArrowCounter(params))
    // se monta el componente y verifico que el contador arranque en 0
    // y que ninguna funcion pasada por parametro sea llamada
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // Verifico que al presionar KEY_DOWN el contador devuelva el valor correcto
    // y ninguna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_DOWN })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(1)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_DOWN })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(2)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico presionando KEY_DOWN por tercera vez, el contador se resetee y ninguna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_DOWN })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico que al presionar keyUp con el contador en 0 se vaya al final de la lista
    // y ninguna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_UP })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(2)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico que al presionar keyUp se comporte de forma correcta y nignuna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_UP })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(1)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico que al llegar al principio de lista vuelva al final
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_UP })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_UP })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(2)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)
    unmount()
  })

  test('it is verified that pressing ArrowUp with horizontal mode behaves as expected', () => {
    const { result, unmount } = renderHook(() => useArrowCounter({ ...params, mode: 'horizontal' }))
    // se monta el componente y verifico que el contador arranque en 0
    // y que ninguna funcion pasada por parametro sea llamada
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // Verifico que al presionar KEY_RIGHT el contador devuelva el valor correcto
    // y ninguna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_RIGHT })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(1)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_RIGHT })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(2)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico presionando KEY_RIGHT por tercera vez, el contador se resetee y ninguna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_RIGHT })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico que al presionar KEY_LEFT con el contador en 0 se vaya al final de la lista
    // y ninguna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_LEFT })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(2)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico que al presionar KEY_LEFT se comporte de forma correcta y nignuna funcion sea llamada
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_LEFT })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(1)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    // verifico que al llegar al principio de lista vuelva al final
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_LEFT })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)

    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_LEFT })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(2)
    expect(params.onConfirm.mock.calls.length).toEqual(0)
    expect(params.onExit.mock.calls.length).toEqual(0)
    unmount()
  })

  it('it is verified that when pressing Enter, the onConfirm function is the only one that is called', () => {
    const { result, unmount } = renderHook(() => useArrowCounter(params))
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_ENTER })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(1)
    expect(params.onExit.mock.calls.length).toEqual(0)
    unmount()
  })
  it('It is verified that when pressing Escape, the onCancel function is called', () => {
    const { result, unmount } = renderHook(() => useArrowCounter(params))
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_ESCAPE })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onExit).toHaveBeenCalled()
    unmount()
  })

  it('It is verified that when pressing TAB, the onCancel function is called', () => {
    const { result, unmount } = renderHook(() => useArrowCounter(params))
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_TAB })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onExit).toHaveBeenCalled()
    unmount()
  })

  it('it is verified that when resetCounter is received and ENTER is pressed, it returns the expected value ', () => {
    const newProps = { ...params, resetCounter: true, onConfirm: jest.fn() }
    const { result, unmount } = renderHook(() => useArrowCounter(newProps))
    // se monta el componente y verifico que el contador arranque en 0
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)

    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_DOWN })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(1)

    // verifico que al presionar ENTER, el contador se resetee
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_ENTER })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onConfirm.mock.calls.length).toEqual(1)
    unmount()
  })

  it('it is verified that when resetCounter is received and ESCAPE is pressed, it returns the expected value  ', () => {
    const newProps = { ...params, resetCounter: true }
    const { result, unmount } = renderHook(() => useArrowCounter(newProps))
    // se monta el componente y verifico que el contador arranque en 0
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)

    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_DOWN })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(1)

    // verifico que al presionar ESCAPE, el contador se resetee
    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_ESCAPE })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)
    expect(params.onExit).toHaveBeenCalled()
    unmount()
  })

  it('should disable counter when disabled prop is true ', () => {
    const newProps = { ...params, disabled: true }
    const { result, unmount } = renderHook(() => useArrowCounter(newProps))

    // se monta el componente y verifico que el contador arranque en 0
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)

    act(() => {
      fireEvent.keyDown(document.body, { keyCode: KEY_DOWN })
    })
    expect(result.current).toBeDefined()
    expect(result.current).toEqual(0)

    unmount()
  })
})
