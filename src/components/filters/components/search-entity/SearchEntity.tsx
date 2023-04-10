import { FunctionComponent, ReactElement, useCallback, useRef, useState, useEffect } from 'react'

// Styles
import { SCWrapper, SCInput, SCInputWrapper } from './styles'

// Types
import { SearchEntityTypes } from './SearchEntity.interface'

export const SearchEntity: FunctionComponent<SearchEntityTypes> = ({
  placeholder = '',
  onSelect,
  dataSelected = '',
  autoFocus = false,
}): ReactElement => {
  const [inputValue, setInputValue] = useState(dataSelected?.title)
  const INPUT = useRef<HTMLInputElement | null>(null)

  const handleInputChange = useCallback(
    ({ target: { value } }) => {
      setInputValue(value)

      const currentValue = value ? [{ id: value }] : []

      onSelect(currentValue)
    },
    [inputValue]
  )

  useEffect(() => {
    autoFocus &&
      setTimeout(() => {
        INPUT?.current?.focus()
      }, 10)
  }, [])

  return (
    <SCWrapper>
      <SCInputWrapper>
        <SCInput
          ref={INPUT}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChange={handleInputChange}
          maxLength={255}
          value={inputValue}
          data-robot-id="filters-searchentity-input"
        />
      </SCInputWrapper>
    </SCWrapper>
  )
}
