import { useRef, useMemo, useState, useCallback, FunctionComponent, ReactElement, useEffect } from 'react'
import { FilterContext } from './Context'

// Styles
import { SCWrapper, SCActionWrapper, SCFilters } from './styles'
// Types
import { FiltersTypes, FilterOptionTypes } from './Filters.interface'
// UI Components
import { AddButton } from './components/add-button'
import { ChipFilter } from './components/chip-filter'
import { L1Dropdown } from './components/l1-dropdown'
import { DeleteButton } from './components/delete-button'
import { L2Dropdown } from './components/l2-dropdown'
import { FiltersSkeletons } from './components/skeletons'
// Hooks
import { useArrowCounter } from '../../hooks/use-arrow-counter'
// CONSTANTS
import { KEY_BACKSPACE, KEY_ESCAPE } from '../../constants'
import { AMPLITUDE_ACTIONS, AMPLITUDE_EVENTS } from '../../constants/filters/amplitude'
import { FILTER_TYPES } from '../../constants/filters/types'
// Utils
import { getTypeOfDate } from './utils/getTypeOfDate'

export const Filters: FunctionComponent<FiltersTypes> = ({
  filters,
  deleteFilter,
  appliedFilters = {},
  trackEvent,
  loading = false,
  lang = 'es',
  notTypeable = false,
  config,
  handleCleanFilters = () => true,
  eventToDispatch = 'locationchange',
  addButtonId = 'add-button-filter-component',
  isSimpleFilter = false,
  portalElementId = '#filters-portal',
}): ReactElement => {
  const [chipCounter, setChipCounter] = useState(0)
  const [openL1, setOpenL1] = useState(false)
  const [openL2, setOpenL2] = useState(false)
  const [customDate, setCustomDate] = useState(false)
  const [optionSelected, setOptionSelected] = useState({})
  const [optionsToFilter, setOptionsToFilter] = useState({})
  const [searchFilters, setSearchFilters] = useState('')
  const [dropdownPositions, setDropdownPositions] = useState({})
  const [openedByChip, setOpenedByChip] = useState(true)
  const [showAddButton, setShowAddButton] = useState(true)
  const [appliedFiltersKeys, setAppliedFiltersKeys] = useState([])
  const [isChipsKeyboardNavigationDisabled, setChipsKeyboardNavigationDisabled] = useState(true)
  const [loadingL2Data, setLoadingL2Data] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [pagination, setPagination] = useState({})
  const CHIP_REF = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const filtersArray = Object.keys(appliedFilters)
    setAppliedFiltersKeys(filtersArray)
  }, [appliedFilters])

  /**
   * Memorizo si hay filtros aplicados
   */
  const hasFiltersApplied = useMemo(() => !!appliedFiltersKeys.length, [appliedFiltersKeys])

  /**
   * Referencia al botón de añadir filtro
   */
  const ADD_BUTTON_REF = useRef<HTMLButtonElement>(null)

  /**
   * Obtiene la position del chipFilter
   */
  const getChipPosition = useCallback((ref?: HTMLSpanElement | HTMLDivElement | null) => {
    const positions = ref ? ref.current?.getBoundingClientRect() : ADD_BUTTON_REF?.current?.getBoundingClientRect()
    if (positions) {
      let { x, y } = positions
      x += window.scrollX
      y += window.scrollY

      setDropdownPositions({ x, y })
    }
  }, [])

  /**
   * Obtiene si se seleccionó una fecha predefinida o personalizada.
   */
  const setCustomDateFromChip = useCallback(isCustomDate => {
    setCustomDate(isCustomDate)
  }, [])

  /**
   * Apertura del L1
   */
  const toggleL1Dropdown = useCallback(() => {
    setOpenL2(false)
    setOpenL1(prev => !prev)
    getChipPosition(ADD_BUTTON_REF)
  }, [ADD_BUTTON_REF])

  /**
   * Cierre del L1
   */
  const closeL1Dropdown = useCallback(() => {
    setSearchFilters('')
    setOpenL1(false)
  }, [])

  /**
   * Cierre del L2
   */
  const closeL2Dropdown = useCallback(() => {
    setOpenL2(false)
  }, [])

  /**
   * Acción de "volver atrás"
   * Cierra L2 y abre L1
   */
  const onGoBack = useCallback(() => {
    setOpenL2(false)
    setOpenL1(true)
  }, [])

  const handleSearchFiltersToApply = useCallback(search => setSearchFilters(search), [])

  /**
   * Apertura del L2
   */
  const toggleL2Dropdown = useCallback(
    async (option: FilterOptionTypes, openByChip = false) => {
      try {
        if (isSimpleFilter && !openByChip) getChipPosition(ADD_BUTTON_REF)

        setLoadingL2Data(true)
        setOptionsToFilter(option as FilterOptionTypes)
        setOpenL1(false)
        setOpenL2(true)

        const { data: optionData, page, lastPage } = await option.get()
        const formattedData = option.format ? option.format(option.id, optionData) : optionData
        const data = {
          ...option,
          data: formattedData,
          selectedData: option.data,
          get: option.get,
        }

        // Setea los items seleccionados solo si fue abierto por un chip
        setOptionSelected(openByChip ? data : {})
        setOptionsToFilter(data as FilterOptionTypes)
        setPagination({
          page,
          lastPage,
        })
        setOpenedByChip(openByChip)
      } catch (error) {
        // TODO: error snackbar
        closeL2Dropdown()
      } finally {
        setLoadingL2Data(false)
      }
    },
    [filters]
  )

  const getNextPageFilter = async search => {
    const { format, id } = optionsToFilter
    const { page, lastPage } = pagination

    if (Number(page) < Number(lastPage)) {
      setLoadingNextPage(true)
      try {
        const nextPage = Number(page) + 1
        const {
          data: optionData,
          page: optionPage,
          lastPage: optionLastPage,
        } = await optionsToFilter.get(nextPage, search)
        const formattedData = format(id, optionData)

        const data = {
          ...optionsToFilter,
          data: optionsToFilter.data.concat(formattedData),
        }
        setOptionsToFilter(data)
        setPagination({
          page: optionPage,
          lastPage: optionLastPage,
        })
      } catch (error) {
        // TODO: show error snackbar
      } finally {
        setLoadingNextPage(false)
      }
    }
  }

  const onClickFromKeyboard = useCallback(() => {
    getChipPosition(CHIP_REF)
    const keyData = appliedFiltersKeys[chipCounter - 1]
    const chipData = appliedFilters[keyData] as FilterOptionTypes
    const isCustomDate = chipData?.data && getTypeOfDate(chipData.data[0])
    setCustomDateFromChip(isCustomDate)
    !!appliedFiltersKeys && chipData && toggleL2Dropdown(chipData, true)
  }, [appliedFiltersKeys, CHIP_REF, chipCounter, appliedFilters])

  const hideMenusWhenScrollToTop = useCallback(() => {
    const addButton = document.querySelector('[data-js="add-button-filter"]') as HTMLElement

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const buttonPosition = addButton.getBoundingClientRect().top + window.scrollY

    if (winScroll + 50 > buttonPosition) {
      document?.activeElement?.blur()
      openL1 && setOpenL1(false)
      openL2 && setOpenL2(false)
    }
  }, [openL1, openL2])

  /**
   * Cuando esta abierto algún menu, verificamos que cuando este en el top del DOM se cierre
   */
  useEffect(() => {
    if (openL1 || openL2) {
      window.addEventListener('scroll', hideMenusWhenScrollToTop)
    } else {
      window.removeEventListener('scroll', hideMenusWhenScrollToTop)
    }

    return () => {
      window.removeEventListener('scroll', hideMenusWhenScrollToTop)
    }
  }, [openL1, openL2])

  /**
   * Hook que retorna un numero como contador cada vez que el usuario navega entre las opciones
   */
  const arrowCounter = useArrowCounter({
    dataMax: appliedFiltersKeys.length + 1,
    onConfirm: onClickFromKeyboard,
    onExit: () => true,
    disabled: openL1 || openL2 || isChipsKeyboardNavigationDisabled,
    resetCounter: true,
    mode: 'horizontal',
    ignoreNext: false,
  })

  useEffect(() => {
    setChipCounter(arrowCounter)
  }, [arrowCounter])

  const onDeleteFilter = useCallback(
    filterId => {
      const updatedKeys = appliedFiltersKeys.filter(filter => filter !== filterId)
      setAppliedFiltersKeys(updatedKeys)
      deleteFilter(filterId)
    },
    [appliedFiltersKeys]
  )

  const deleteChipWithKeyboard = useCallback(
    ({ keyCode }) => {
      if (keyCode === KEY_BACKSPACE) {
        const keyData = appliedFiltersKeys[chipCounter - 1]
        const data = appliedFilters[keyData] as FilterOptionTypes

        if (!!appliedFiltersKeys && data) {
          onDeleteFilter(keyData)
          trackEvent({
            event: AMPLITUDE_EVENTS.DELETE_FILTER,
            actionType: AMPLITUDE_ACTIONS.KEYBOARD,
            option: data?.id,
          })
        }
      }
    },
    [appliedFiltersKeys, chipCounter]
  )

  useEffect(() => {
    document.addEventListener('keydown', deleteChipWithKeyboard)
    setShowAddButton(
      !isSimpleFilter ? Object.keys(filters).length !== appliedFiltersKeys.length : appliedFiltersKeys.length !== 1
    )

    return () => {
      document.removeEventListener('keydown', deleteChipWithKeyboard)
    }
  }, [chipCounter, appliedFiltersKeys])

  const contextData = {
    trackEvent,
    lang,
    config,
  }

  const handleCloseMenusWithKeyboard = useCallback(
    ({ keyCode }) => {
      if (keyCode === KEY_ESCAPE && (openL1 || openL2)) {
        trackEvent({
          event: AMPLITUDE_EVENTS.CANCEL,
          actionType: AMPLITUDE_ACTIONS.KEYBOARD,
        })

        closeL1Dropdown()
        closeL2Dropdown()
      }
    },
    [openL1, openL2]
  )

  const handleCloseMenus = useCallback(() => {
    trackEvent({
      event: AMPLITUDE_EVENTS.CANCEL,
      actionType: AMPLITUDE_ACTIONS.CLICK,
    })

    closeL1Dropdown()
    closeL2Dropdown()
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleCloseMenusWithKeyboard)

    return () => {
      document.removeEventListener('keydown', handleCloseMenusWithKeyboard)
    }
  }, [openL1, openL2])

  const handleSelectOption = useCallback(options => {
    setOptionSelected(options)
  }, [])

  const onDeleteFilters = useCallback(() => {
    appliedFiltersKeys.forEach(key => {
      deleteFilter(key)
    })

    setAppliedFiltersKeys([])
    handleCleanFilters()
  }, [appliedFiltersKeys])

  const addFilterToUrl = (filterId, data) => {
    let values

    if (data[0]?.type === FILTER_TYPES.DATE) {
      if (data[0]?.value?.fromDate || data[0]?.value?.toDate) {
        values = `${data[0]?.value?.fromDate},${data[0]?.value?.toDate}`
      }
      if (data[0]?.value?.from || data[0]?.value?.to) {
        values = `${data[0]?.value?.from},${data[0]?.value?.to}`
      }
      if (data[0]?.value?.from === null && data[0]?.value?.to === null) {
        values = `withoutDeadline`
      }
    } else {
      values = data.map(item => encodeURIComponent(item?.id)).join(',')
    }

    const params = new URLSearchParams(window.location.search)

    params.set(filterId, values)

    window.history.replaceState(null, '', `?${params}${window.location.hash}`)
    window.dispatchEvent(new CustomEvent(eventToDispatch, { detail: { filterId } }))
  }

  const hasTaskFilterApplied = useMemo(() => !!appliedFilters.tasks, [appliedFilters])

  return (
    <FilterContext.Provider value={contextData}>
      <SCWrapper>
        <SCFilters>
          {loading ? (
            <FiltersSkeletons />
          ) : (
            <>
              {appliedFiltersKeys.map((key, index) => (
                <div ref={index === chipCounter - 1 ? CHIP_REF : null} key={key}>
                  <ChipFilter
                    onClick={toggleL2Dropdown}
                    onDelete={onDeleteFilter}
                    chipData={appliedFilters[key]}
                    getChipPosition={getChipPosition}
                    isSelected={index === chipCounter - 1}
                    getCustomDate={setCustomDateFromChip}
                  />
                </div>
              ))}
              <SCActionWrapper>
                <AddButton
                  isSimple={hasFiltersApplied}
                  onClick={isSimpleFilter ? () => toggleL2Dropdown(filters) : () => toggleL1Dropdown()}
                  ref={ADD_BUTTON_REF}
                  onSearch={handleSearchFiltersToApply}
                  show={showAddButton}
                  searchFilters={searchFilters}
                  setSearchFilters={setSearchFilters}
                  isMenuOpen={openL2 || openL1}
                  closedMenus={!openL1 && !openL2}
                  openedByChip={openedByChip}
                  hasFiltersApplied={hasFiltersApplied}
                  setChipsKeyboardNavigationDisabled={setChipsKeyboardNavigationDisabled}
                  notTypeable={notTypeable}
                  addButtonId={addButtonId}
                />
                {hasFiltersApplied && <DeleteButton onClick={onDeleteFilters} />}
              </SCActionWrapper>
              {openL1 && !isSimpleFilter && (
                <L1Dropdown
                  filters={filters}
                  onClose={handleCloseMenus}
                  searchFilters={searchFilters}
                  setSearchFilters={setSearchFilters}
                  l1Positions={dropdownPositions}
                  appliedFilters={appliedFilters}
                  toggleL2Dropdown={toggleL2Dropdown}
                  addFilterToUrl={addFilterToUrl}
                  hasTaskFilterApplied={hasTaskFilterApplied}
                  portalElementId={portalElementId}
                />
              )}
              {openL2 && !!optionsToFilter && (
                <L2Dropdown
                  isSimpleFilter={isSimpleFilter}
                  onGoBack={onGoBack}
                  onClose={closeL2Dropdown}
                  l2Positions={dropdownPositions}
                  dataSelected={optionSelected?.selectedData}
                  setDataSelected={handleSelectOption}
                  filters={filters}
                  optionsToFilter={optionsToFilter as FilterOptionTypes}
                  setOptionsToFilter={setOptionsToFilter}
                  customDateFromChip={customDate}
                  openedByChip={openedByChip}
                  addFilterToUrl={addFilterToUrl}
                  loading={loadingL2Data}
                  getNextPageFilter={getNextPageFilter}
                  loadingNextPage={loadingNextPage}
                  setLoadingNextPage={setLoadingNextPage}
                  pagination={pagination}
                  setPagination={setPagination}
                  portalElementId={portalElementId}
                />
              )}
            </>
          )}
        </SCFilters>
      </SCWrapper>
    </FilterContext.Provider>
  )
}
