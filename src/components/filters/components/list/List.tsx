import { FunctionComponent, useCallback, useEffect, useMemo, useState, useRef } from 'react'

import ReactTooltip from 'react-tooltip'

// Wording
import { useTranslation } from 'react-i18next'
import { useNearScreen } from '../../../../hooks/useNearScreen'

// Interface
import { ListProps } from './List.interface'
import { ListTypes } from '../../Filters.interface'

// UI Components
import { ItemList } from '../item-list'
import { UserRow } from '../user-row'
import { UserPositionsRow } from '../user-positions-row'
import { L2AvatarSkeletons, L2TextSkeletons } from '../skeletons'

// Styles
import { SCEmptyWrapper, SCImage, SCListWrapper, SCText } from './style'

// Images
import Search from '../../../../assets/svg/search.svg'

// Hooks
import { useArrowCounter } from '../../../../hooks/use-arrow-counter'

// CONSTANTS
import { I18N_SECTION, LIMIT_MAX_ITEMS } from '../../../../constants/filters/config'
import { FILTER_TYPES } from '../../../../constants/filters/types'

// Utils
import { getTypeOfDate } from '../../utils/getTypeOfDate'

export const List: FunctionComponent<ListProps> = ({
  multiple,
  type,
  getSelection,
  onSelect,
  data,
  dataSelected = [],
  getNextPageFilter,
  loadingNextPage,
  pagination = {},
  searchValue,
}) => {
  const { t } = useTranslation(I18N_SECTION)
  const [values, setValues] = useState(dataSelected)
  const { isNearScreen, fromRef } = useNearScreen({ once: false })
  const LIST_REF = useRef(null)
  const { page, lastPage } = pagination
  const MIN_ITEMS_TO_PAGINATE = 20

  const disableSelection = useMemo(() => values.length === LIMIT_MAX_ITEMS, [values])

  const getCheckboxes = () => {
    const list = document.querySelector('[data-js="filter-list"]')
    const allCheckBox = list ? list.querySelectorAll('input[type=checkbox]') : []
    return allCheckBox as Array<HTMLInputElement>
  }

  const getMultipleSelection = () => {
    const checkboxes = getCheckboxes()
    const newValues = []

    checkboxes?.forEach(({ checked, value: checkboxValue }) => {
      const item = data.find(listItem => checkboxValue === String(listItem.id))

      if (checked && item) {
        newValues.push(item)
      }
    })

    return newValues
  }

  const getSimpleSelection = item => {
    const checkboxes = getCheckboxes()
    let newValue = []

    checkboxes?.forEach(({ checked, value: checkboxValue }) => {
      if (checked && checkboxValue === String(item.id)) {
        newValue = [item]
      }

      if (checked && item.type === FILTER_TYPES.DATE) {
        newValue = [item]
      }
    })

    return newValue
  }

  const handleCheckItem = useCallback(
    value => {
      const newValues = multiple ? getMultipleSelection() : getSimpleSelection(value)

      if (newValues.length <= LIMIT_MAX_ITEMS) {
        onSelect(newValues)
        setValues(newValues)
        getSelection(value)
      }
    },
    [data]
  )

  const onClickFromKeyboard = value => {
    const selectedItem = data[value]

    if (selectedItem) {
      const list = document.querySelector('[data-js="filter-list"]')
      const checkbox = list?.querySelector(`input[type='checkbox'][value="${selectedItem.id}"]`) as HTMLInputElement

      if (document.activeElement === checkbox) {
        checkbox.checked = !checkbox.checked
        handleCheckItem(selectedItem)
      }
    }
  }

  const arrowCounter = useArrowCounter({
    dataMax: data.length,
    onConfirm: onClickFromKeyboard,
    onExit: () => true,
    ignoreNext: false,
    resetCounter: false,
  })

  /**
   * Verificamos si la fecha del chip está entre las precargadas.
   */
  const getDateTitle = useCallback(actualValues => {
    let diff

    if (actualValues[0]?.value?.from && actualValues[0]?.value?.to) {
      diff = getTypeOfDate(actualValues[0].value)
    }

    if (actualValues[0]?.fromDate || actualValues[0]?.toDate) {
      diff = getTypeOfDate(actualValues[0])
    }
    const dates = {
      0: 'thisMonth',
      100: 'today',
      1: 'lastMonth',
      3: 'lastThreeMonth',
      6: 'lastSixMonth',
      107: 'nextSevenDays',
      12: 'lastTwelveMonth',
    }

    // Si diff es true significa que es NaN entonces estamos viendo el mes pasado.
    if (typeof diff === 'boolean' && diff === true) {
      return 'lastMonth'
    }

    if (actualValues[0]?.fromDate === 'withoutDeadline') {
      return 'withoutDeadline'
    }

    return dates[diff]
  }, [])

  /**
   * Verifica si la data que viene desde el chip coincide con alguna de las opciones de la
   *  lista precargada y verifica si debiera estar seleccionada.
   */
  const isSelectedSelector = (itemSelected): boolean => {
    let isSelected = false

    // Verifica si es de tipo texto
    if (typeof itemSelected.value !== 'object') {
      isSelected = !!values?.find(selectedItem => String(selectedItem.id) === String(itemSelected.id))
    }

    // Verifica si es de tipo fecha
    if (
      typeof itemSelected.value === 'object' &&
      ((itemSelected.value?.to && itemSelected.value?.from) ||
        !(itemSelected.value?.toDate && itemSelected.value?.fromDate))
    ) {
      const dateTitle = getDateTitle(values)

      isSelected = dateTitle && dateTitle === itemSelected.title
    }

    // Verifica si es de tipo avatar o posicion.
    if ((itemSelected.id && itemSelected.email) || Object.keys(itemSelected).find(key => key === 'categoryName')) {
      isSelected = !!values?.find(selectedItem => String(selectedItem.id) === String(itemSelected.id))
    }

    return isSelected
  }

  useEffect(() => {
    const itemName = `l2-dropdown-item-${arrowCounter}`
    const item = document.querySelector(`[data-js="${itemName}"]`) as HTMLInputElement
    item?.focus()
  }, [arrowCounter])

  useEffect(() => {
    if (isNearScreen && +page !== +lastPage && data?.length >= MIN_ITEMS_TO_PAGINATE && !loadingNextPage) {
      getNextPageFilter(searchValue)
    }
  }, [isNearScreen, page, lastPage, searchValue, data, loadingNextPage])

  const LoadingSkeletons = useCallback(() => {
    if (type === ListTypes.text) {
      return <L2TextSkeletons noStyles />
    }

    return <L2AvatarSkeletons noStyles />
  }, [type])

  const renderRows = useCallback(
    rowsToRender => {
      if (rowsToRender.length) {
        return rowsToRender.map((item, index: number) => {
          const isSelected = isSelectedSelector(item)
          const { title, icon, borderColor, id: itemId } = item
          if (type === ListTypes.text || type === ListTypes.date) {
            return (
              <ItemList
                key={title + itemId}
                text={title}
                onSelect={handleCheckItem}
                value={item}
                selected={isSelected}
                isFocused={index === arrowCounter}
                isDisabled={disableSelection && !isSelected}
                borderColor={borderColor}
                icon={icon}
                index={index}
              />
            )
          }
          if (type === ListTypes.avatars) {
            return (
              <UserRow
                key={itemId}
                data={item}
                onSelect={handleCheckItem}
                selected={isSelected}
                isFocused={index === arrowCounter}
                isDisabled={disableSelection && !isSelected}
                index={index}
              />
            )
          }
          return (
            <UserPositionsRow
              key={`category_${item.categoryName}_position_${item.name}_id_${item.id}`}
              categoryName={item.categoryName}
              name={item.name}
              id={item.id}
              onSelect={handleCheckItem}
              isFocused={index === arrowCounter}
              selected={isSelected}
              isDisabled={disableSelection && !isSelected}
              index={index}
            />
          )
        })
      }
      return null
    },
    [data, values, arrowCounter]
  )

  return (
    <SCListWrapper data-js="filter-list" ref={LIST_REF}>
      {disableSelection && <ReactTooltip id="full-text-checkbox-filters" delayHide={1000} />}
      {renderRows(data)}
      {loadingNextPage && <LoadingSkeletons />}
      {!!data.length && <div ref={fromRef} />}
      {!data.length && (
        <SCEmptyWrapper>
          <SCImage src={Search} alt="There's no results" data-robot-id="filters-list-empty-img" />
          <SCText data-robot-id="filters-list-empty-label">{t('withoutResults')}</SCText>
        </SCEmptyWrapper>
      )}
    </SCListWrapper>
  )
}
