import { useMemo, useCallback, FunctionComponent, ReactElement, useContext, ReactPortal } from 'react'
import ReactDOM from 'react-dom'
import uuid from 'react-uuid'

// Wording
import { useTranslation } from 'react-i18next'

// Types
import { L1DropdownTypes } from './L1Dropdown.interface'

// Styles
import { SCWrapper, SCBackdrop } from './styles'

// UI Components
import { Item } from './components/item'

// Hooks
import { useArrowCounter } from '../../../../hooks/use-arrow-counter'

// Context
import { ContextTypes, FilterContext } from '../../Context'

// Constants
import { AMPLITUDE_ACTIONS, AMPLITUDE_EVENTS } from '../../../../constants/filters/amplitude'
import { I18N_SECTION } from '../../../../constants/filters/config'

const L1DropdownPortal: FunctionComponent<L1DropdownTypes> = ({
  filters,
  onClose,
  l1Positions,
  toggleL2Dropdown,
  searchFilters = '',
  appliedFilters = {},
  addFilterToUrl,
  setSearchFilters,
  hasTaskFilterApplied,
}): ReactElement => {
  const { t } = useTranslation(I18N_SECTION)
  const { trackEvent, config } = useContext(FilterContext) as ContextTypes
  let counter

  /**
   * Memorizo las keys de los filtros a aplicar
   */
  const keysFilters = useMemo(() => Object.keys(filters), [filters])

  /**
   * Se verifica cuales son los filtros a aplicar habilitados (si ya está aplicado el filtro no se debe mostrar en el L1)
   */
  const availableFilters = keysFilters.filter(option => !(appliedFilters[option]?.id === filters[option].id))

  /**
   * Filtra las opciones del filtro habilitadas segun el buscador
   */
  const filtersOptions = searchFilters
    ? availableFilters.filter(key => searchFilters && t(key).toLowerCase().includes(searchFilters.toLocaleLowerCase()))
    : availableFilters

  /**
   * Click en una opción
   */
  const handleClick = useCallback((data): void => {
    toggleL2Dropdown(data, false)
  }, [])

  const handleClickWithMouse = useCallback(
    data => {
      trackEvent({
        event: AMPLITUDE_EVENTS.SELECT_FILTER,
        actionType: AMPLITUDE_ACTIONS.CLICK,
        selectedByInput: !!searchFilters,
        option: data,
      })

      handleClick(data)
    },
    [searchFilters]
  )

  const filterByTaskName = useCallback(() => {
    const data = [{ id: searchFilters }]
    addFilterToUrl('tasks', data)
    setSearchFilters('')
    onClose()
  }, [searchFilters])

  const onClickFromKeyboard = useCallback(() => {
    const eventData = {
      event: AMPLITUDE_EVENTS.SELECT_FILTER,
      actionType: AMPLITUDE_ACTIONS.KEYBOARD,
      selectedByInput: !!searchFilters,
    }

    if (searchFilters && filtersOptions.length === 0 && !hasTaskFilterApplied) {
      filterByTaskName()

      trackEvent({
        ...eventData,
        option: searchFilters,
      })
    } else {
      const key = filtersOptions[counter]
      const data = filters[key]

      if (!!filtersOptions.length && data) {
        handleClick(data)
        trackEvent({
          ...eventData,
          option: data.id,
        })
      }
    }
  }, [filtersOptions, searchFilters, filters])

  counter = useArrowCounter({
    dataMax: filtersOptions.length,
    onConfirm: onClickFromKeyboard,
    onExit: () => true,
    ignoreNext: false,
    resetCounter: true,
  })

  return (
    <>
      <SCWrapper
        l1Positions={l1Positions}
        data-js="filters-l1-dropdown"
        showL1={!!filtersOptions.length || !hasTaskFilterApplied}
      >
        {filtersOptions.map((key, index) => (
          <Item
            key={uuid()}
            data={filters[key]}
            onClick={handleClickWithMouse}
            text={filters[key].title || filters[key].id}
            isSelected={index === counter}
            icon={config[filters[key].id]?.icon}
          />
        ))}
        {searchFilters && !hasTaskFilterApplied && (
          <Item key={uuid()} onClick={filterByTaskName} text={`${t('taskContains')} "${searchFilters}"`} />
        )}
      </SCWrapper>
      <SCBackdrop onClick={onClose} data-robot-id="filters-l1dropdown-backdrop" />
    </>
  )
}

export const L1Dropdown = (props: L1DropdownTypes): ReactPortal | null => {
  const { portalElementId } = props
  const defaultElementId = portalElementId || '#root'
  const selector = document.querySelector(defaultElementId)

  return selector ? ReactDOM.createPortal(<L1DropdownPortal {...props} />, selector) : null
}
