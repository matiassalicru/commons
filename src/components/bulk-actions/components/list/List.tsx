import { FunctionComponent, useCallback, useState, ReactElement } from 'react'

// Wording
import { useTranslation } from 'react-i18next'

// Interface
import { ListProps } from './List.interface'

// UI Components
import { ItemList } from '../item-list'
import { Status } from './components/icons/Status'
import { Priority } from './components/icons/Priority'

// Styles
import { SCListWrapper, SCImage, SCText, SCEmptyWrapper } from './style'

// Images
import Search from '../../../../assets/svg/search.svg'

const STATUS_ID = 'status'
const PRIORITY_ID = 'priority'

export const List: FunctionComponent<ListProps> = ({ data, onSelect, id }) => {
  const [values, setValues] = useState([])

  const { t } = useTranslation('globals')

  const getCheckboxes = () => {
    const list = document.querySelector('[data-js="bulkActions-list"]')
    const allCheckBox = list ? list.querySelectorAll('input[type=checkbox]') : []
    return allCheckBox as Array<HTMLInputElement>
  }

  const getSimpleSelection = item => {
    const checkboxes = getCheckboxes()
    let newValue = []

    checkboxes?.forEach(({ checked, value: checkboxValue }) => {
      if (checked && checkboxValue === String(item.id)) {
        newValue = [item]
      }
    })
    return newValue
  }

  /**
   * Selecciona una opción de la lista
   */
  const handleCheckItem = useCallback(value => {
    const newValues = getSimpleSelection(value)

    onSelect(newValues)
    setValues(newValues)
  }, [])

  const iconSelector = useCallback((item): ReactElement | null => {
    if (id === STATUS_ID) {
      return <Status color={item?.color} />
    }
    if (id === PRIORITY_ID) {
      return <Priority iconSpecs={item?.iconSpecs} />
    }
    return null
  }, [])

  return (
    <SCListWrapper data-js="bulkActions-list">
      {data?.length ? (
        data.map(item => {
          const isSelected = !!values?.find(itemSelected => itemSelected.id === item.id)
          return (
            <ItemList
              value={item}
              key={item.id}
              text={item.id}
              selected={isSelected}
              icon={iconSelector(item)}
              onSelect={handleCheckItem}
            />
          )
        })
      ) : (
        <SCEmptyWrapper>
          <SCImage src={Search} alt="There's no results" />
          <SCText>{t('without_results')}</SCText>
        </SCEmptyWrapper>
      )}
    </SCListWrapper>
  )
}
