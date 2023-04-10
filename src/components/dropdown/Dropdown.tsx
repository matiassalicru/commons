import { useCallback, FunctionComponent, ReactElement } from 'react'
import uuid from 'react-uuid'
// Wording
import { useTranslation } from 'react-i18next'
// Types
import { DropdownTypes } from './Dropdown.interface'
// Styles
import { SCWrapper, SCBackdrop } from './styles'
// UI Components
import { Item } from './components/item'
// Hooks
import { useArrowCounter } from '../../hooks/use-arrow-counter'
// Constants
import { INPUT_TYPES } from './constants/inputTypes'

export const Dropdown: FunctionComponent<DropdownTypes> = ({
  items,
  onClose,
  positions,
  handleSelectItem,
  translatesKeyMapper,
  i18nSection = 'globals',
  isKeyboardNavigationAvailable = true,
}): ReactElement => {
  const { t } = useTranslation(i18nSection)
  let counter

  const handleClickWithMouse = useCallback((data): void => {
    handleSelectItem(data, INPUT_TYPES.CLICK)
  }, [])

  const onClickFromKeyboard = () => {
    const data = items[counter]
    handleSelectItem(data, INPUT_TYPES.KEYBOARD)
  }

  counter =
    isKeyboardNavigationAvailable &&
    useArrowCounter({
      dataMax: items.length,
      onConfirm: onClickFromKeyboard,
      onExit: () => true,
      ignoreNext: false,
      resetCounter: true,
    })

  return (
    <>
      <SCWrapper positions={positions}>
        {items.map((data, index) => (
          <Item
            key={uuid()}
            data={data}
            text={t(translatesKeyMapper ? translatesKeyMapper[data.id] : data.id)}
            icon={data.icon}
            onClick={handleClickWithMouse}
            hasCustomIcon={data.customIcon}
            isSelected={index === counter}
          />
        ))}
      </SCWrapper>
      <SCBackdrop onClick={onClose} />
    </>
  )
}
