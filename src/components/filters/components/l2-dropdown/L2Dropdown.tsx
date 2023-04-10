/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FunctionComponent,
  ReactElement,
  useCallback,
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
  ReactPortal,
} from 'react'
import ReactDOM from 'react-dom'
// Wording
import { useTranslation } from 'react-i18next'
// Types
import { L2DropdownTypes } from './L2Dropdown.interface'
// UI Components
import { List } from '../list'
import { DateRange } from '../date-range'
import { Search } from './components/search'
import { TitleContainer } from './components/title-container'
import { SearchEntity } from '../search-entity'
// Utils
import { KEY_BACKSPACE, KEY_LEFT } from '../../../../constants'
// Context
import { ContextTypes, FilterContext } from '../../Context'
// CONSTANTS
import { AMPLITUDE_ACTIONS, AMPLITUDE_EVENTS } from '../../../../constants/filters/amplitude'
import { I18N_SECTION } from '../../../../constants/filters/config'
// Images
import SearchImg from '../../../../assets/svg/search.svg'
// Styles
import {
  SCWrapper,
  SCConfirmButton,
  SCBackdrop,
  SCWrapperDate,
  SCImage,
  SCText,
  SCEmptyWrapper,
  SCFocusable,
} from './style'

import { L2AvatarSkeletons, L2TextSkeletons, L2PositionsSkeletons } from '../skeletons'
import { ListTypes } from '../../Filters.interface'

/**
 * Titulo a evaluar para definir si se muestra una List o un dateRange
 */
const CUSTOM_TITLE = 'custom'
const AVATARS = 'avatars'
const SEARCH_TYPE = 'search'

const L2DropdownPortal: FunctionComponent<L2DropdownTypes> = ({
  onClose,
  onGoBack,
  l2Positions,
  isSimpleFilter,
  optionsToFilter,
  dataSelected = [],
  setDataSelected,
  customDateFromChip,
  openedByChip,
  errorState = false,
  addFilterToUrl,
  filters,
  loading,
  getNextPageFilter,
  loadingNextPage,
  pagination,
  setPagination,
  setOptionsToFilter,
  setLoadingNextPage,
}): ReactElement => {
  const { trackEvent, config } = useContext(FilterContext) as ContextTypes
  const { id, data: dataToFilter, title: filterTitle, get, format } = optionsToFilter
  const { hasSearch, type, isMultiple, hasFilter } = config[id]
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState(dataToFilter)
  const [isCustomDate, setIsCustomDate] = useState(
    !!dataSelected.length && customDateFromChip && typeof customDateFromChip === 'boolean'
  )
  const [showBackButton, setShowBackButton] = useState(openedByChip && isCustomDate)
  const { t } = useTranslation(I18N_SECTION)
  const FOCUSABLE_ELEMENT_REF = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setFilteredData(dataToFilter)
  }, [dataToFilter])

  const handleSubmit = (dataFromSimpleFilters?: any, e?: any) => {
    e?.preventDefault()

    trackEvent({
      event: AMPLITUDE_EVENTS.SELECT_OPTION,
      actionType: AMPLITUDE_ACTIONS.CLICK,
      multiple: isMultiple,
      option: id,
      amountValues: dataSelected.length,
    })

    addFilterToUrl(id, isSimpleFilter ? dataFromSimpleFilters : dataSelected)
    onClose()
  }

  const handleCancel = useCallback(() => {
    onClose()
  }, [])

  const goBackFromKeyboard = useCallback(
    ({ keyCode }) => {
      if (type === 'search') {
        if (keyCode === KEY_LEFT) {
          !openedByChip && !dataSelected[0]?.id && onGoBack()
        }
        if (keyCode === KEY_BACKSPACE) {
          !openedByChip && searchValue.length > 0 && !dataSelected[0]?.id && onGoBack()
        }
      } else if (keyCode === KEY_LEFT || (keyCode === KEY_BACKSPACE && !hasFilter)) {
        !openedByChip && !searchValue.length && !dataSelected[0]?.id && onGoBack()
      }
    },
    [searchValue, dataSelected]
  )

  /**
   * Setea el tipo fecha personalizada en false, para indicar que data debe mostrar el L2
   */
  const onGoBackL2 = useCallback(() => {
    setIsCustomDate(false)
  }, [])

  useEffect(() => {
    // Si viene del chip y IsCustomDate -> Mostrar el botón
    // Si no viene del chip -> Mostrar el botón
    setShowBackButton((openedByChip && isCustomDate) || !openedByChip)

    // Si viene del chip pero no isCustomDate -> No mostrar el botón
    openedByChip && !isCustomDate && setShowBackButton(false)
  }, [isCustomDate, openedByChip])

  /**
   * Verifica que función de volver atrás debe llamarse
   */
  const onGoBackSelector = useCallback(() => {
    isCustomDate ? onGoBackL2() : onGoBack()
  }, [isCustomDate])

  /**
   * Verifica si la opción seleccionada es "custom" para renderizar el selector de fecha personalizado
   */
  const getSelection = useCallback(selection => {
    const { title } = selection
    setIsCustomDate(title === CUSTOM_TITLE)
  }, [])

  const onSelect = options => {
    setDataSelected({ selectedData: options })
    if (isSimpleFilter) {
      handleSubmit(options)
    }
  }

  const onSearch = async ({ target: { value } }) => {
    setSearchValue(value)

    const DEFAULT_PAGE = 1

    setLoadingNextPage(true)

    try {
      const { data, page, lastPage } = await get(DEFAULT_PAGE, value)
      const formattedData = format(id, data)

      setPagination({ page, lastPage })
      setOptionsToFilter({
        ...optionsToFilter,
        data: formattedData,
      })
    } finally {
      setLoadingNextPage(false)
    }
  }

  /**
   * Obtenemos los colaboradores y los seteamos
   */
  useEffect(() => {
    if (type === AVATARS) {
      setFilteredData(filters[id].data)
    }
  }, [filters, type])

  const L2Options = {
    text: (
      <List
        type={type}
        onSelect={onSelect}
        getSelection={getSelection}
        data={filteredData}
        dataSelected={dataSelected}
        multiple={isMultiple}
        openedByChip={openedByChip}
        getNextPageFilter={getNextPageFilter}
        loadingNextPage={loadingNextPage}
        pagination={pagination}
        searchValue={searchValue}
      />
    ),
    avatars: (
      <List
        type={type}
        onSelect={onSelect}
        getSelection={getSelection}
        data={filteredData}
        dataSelected={dataSelected}
        multiple={isMultiple}
        openedByChip={openedByChip}
        getNextPageFilter={getNextPageFilter}
        loadingNextPage={loadingNextPage}
        pagination={pagination}
        searchValue={searchValue}
      />
    ),
    positions: (
      <List
        type={type}
        onSelect={onSelect}
        getSelection={getSelection}
        data={filteredData}
        dataSelected={dataSelected}
        multiple={isMultiple}
        openedByChip={openedByChip}
        getNextPageFilter={getNextPageFilter}
        loadingNextPage={loadingNextPage}
        pagination={pagination}
        searchValue={searchValue}
      />
    ),
    custom: (
      <SCWrapperDate>
        <DateRange onSelect={onSelect} dataSelected={dataSelected[0]} filterId={id} />
      </SCWrapperDate>
    ),
    search: <SearchEntity autoFocus onSelect={onSelect} placeholder={t('taskSearch')} dataSelected={dataSelected[0]} />,
  }

  const isConfirmButtonDisabled = useMemo(
    () => (isCustomDate ? !(dataSelected[0]?.value?.toDate || dataSelected[0]?.value?.fromDate) : !dataSelected.length),
    [isCustomDate, dataSelected]
  )

  useEffect(() => {
    document.addEventListener('keydown', goBackFromKeyboard)

    return () => {
      document.removeEventListener('keydown', goBackFromKeyboard)
    }
  }, [searchValue, isConfirmButtonDisabled, dataSelected])

  /**
   * Hacemos focus sobre este elemento dummy apenas carga el componente para que el foco no quede
   * en algun menu anterior, si hasSearch es true, entonces hacemos foco en el search
   */
  useEffect(() => {
    if (hasSearch && !loading) {
      const search = document.querySelector('[data-js="filter-l2-search"]') as HTMLInputElement
      search.focus()
    } else {
      FOCUSABLE_ELEMENT_REF?.current?.focus()
    }
  }, [FOCUSABLE_ELEMENT_REF, loading, hasSearch])
  return (
    <>
      <SCWrapper l2Positions={l2Positions} data-js="filters-l2-dropdown">
        <SCFocusable ref={FOCUSABLE_ELEMENT_REF} data-robot-id="filters-l2dropdown-input" />
        {!isSimpleFilter && (
          <TitleContainer
            title={filterTitle || id}
            onClose={onClose}
            onGoBack={onGoBackSelector}
            showBackButton={showBackButton}
          />
        )}
        {hasSearch && !hasFilter && !loading && <Search onSearch={onSearch} />}
        {hasFilter && !hasSearch && <Search data={dataToFilter} setData={setFilteredData} isFilter={hasFilter} />}
        {!errorState ? (
          <>
            {loading && type === ListTypes.text && <L2TextSkeletons />}
            {loading && type === ListTypes.avatars && <L2AvatarSkeletons />}
            {loading && type === ListTypes.positions && <L2PositionsSkeletons />}
            {!loading && L2Options[isCustomDate ? CUSTOM_TITLE : type]}
            {(!!filteredData?.length || type === SEARCH_TYPE) && !isSimpleFilter && (
              <SCConfirmButton
                onClick={e => handleSubmit({}, e)}
                disabled={isConfirmButtonDisabled}
                data-robot-id="filters-l2dropdown-button"
              >
                {t('confirm')}
              </SCConfirmButton>
            )}
          </>
        ) : (
          <SCEmptyWrapper>
            <SCImage src={SearchImg} alt="There's no results" data-robot-id="filters-l2dropdown-img" />
            <SCText data-robot-id="filters-l2dropdown-msg">{t('errorMessage')}</SCText>
          </SCEmptyWrapper>
        )}
      </SCWrapper>
      <SCBackdrop aria-label="backdrop" onClick={handleCancel} data-robot-id="filters-l2dropdown-backdrop" />
    </>
  )
}

export const L2Dropdown = (props: L2DropdownTypes): ReactPortal | null => {
  const { portalElementId } = props
  const defaultElementId = portalElementId || '#root'
  const selector = document.querySelector(defaultElementId)

  return selector ? ReactDOM.createPortal(<L2DropdownPortal {...props} />, selector) : null
}
