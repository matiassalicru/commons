/* eslint-disable jsx-a11y/aria-role */
import {
  forwardRef,
  FunctionComponent,
  useRef,
  useCallback,
  useEffect,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react'

// Wording
import { useTranslation } from 'react-i18next'

// UI Components
import { Plus } from '@projectcor/icons/lib/components/Plus'
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { AddButtonTypes } from './AddButton.interface'

// Constants
import { KEYS } from '../../../../utils/keyboardKeys'
import { AMPLITUDE_EVENTS, AMPLITUDE_ACTIONS } from '../../../../constants/filters/amplitude'
import { I18N_SECTION } from '../../../../constants/filters/config'

// Context
import { ContextTypes, FilterContext } from '../../Context'

// Styles
import { SCButtonWrapper, SCLabel, SCEditableContent, SCWrapper } from './styles'

export const AddButton: FunctionComponent<AddButtonTypes> = forwardRef<HTMLButtonElement, AddButtonTypes>(
  (
    {
      onClick,
      onSearch,
      isSimple = false,
      show,
      searchFilters,
      setSearchFilters,
      isMenuOpen,
      openedByChip,
      hasFiltersApplied,
      closedMenus,
      setChipsKeyboardNavigationDisabled,
      notTypeable,
      addButtonId,
    },
    ref
  ): ReactElement => {
    const INPUT_REF = useRef<HTMLInputElement>(null)
    const { trackEvent } = useContext(FilterContext) as ContextTypes
    const { t } = useTranslation(I18N_SECTION)
    const [hasFocus, setHasFocus] = useState(false)

    const focusButton = ({ metaKey, shiftKey, code, ctrlKey }) => {
      const isMac = navigator.userAgent.indexOf('Mac OS X') !== -1
      const actionKey = isMac ? metaKey : ctrlKey

      if (actionKey && shiftKey && code === KEYS.F) {
        ref?.current.focus()
        setChipsKeyboardNavigationDisabled(false)
      }
    }

    const preventEnterKey = event => {
      if (event.key === KEYS.ENTER) {
        document?.activeElement?.blur()
        event.preventDefault()
      }
    }

    useEffect(() => {
      const contentEditable = document.querySelector('[data-js="add-filter-content-editable"]') as HTMLElement
      document.addEventListener('keydown', focusButton)

      // Remove enter key event on search
      contentEditable.addEventListener('keypress', preventEnterKey)

      return () => {
        document.removeEventListener('keydown', focusButton)
        contentEditable.removeEventListener('keypress', preventEnterKey)
      }
    }, [ref])

    const handleClick = () => {
      if (!notTypeable) {
        INPUT_REF?.current?.focus()
      }

      onClick()

      trackEvent({
        event: AMPLITUDE_EVENTS.ADD_FILTER,
        actionType: AMPLITUDE_ACTIONS.CLICK,
      })
    }

    const handleInput = useCallback(
      ({ currentTarget: { textContent } }) => {
        const contentEditable = document.querySelector('[data-js="add-filter-content-editable"]') as HTMLElement

        if (textContent.length <= 255) {
          setSearchFilters(textContent)
          onSearch(textContent)
        } else {
          contentEditable.innerHTML = searchFilters
        }
      },
      [searchFilters]
    )

    const handleBlurInput = useCallback(() => {
      if (searchFilters) {
        trackEvent({
          event: AMPLITUDE_EVENTS.LINE_INPUT,
          actionType: AMPLITUDE_ACTIONS.CLICK,
        })
      }
    }, [searchFilters])

    useEffect(() => {
      if (!searchFilters) {
        const editableContent = document.querySelector('[data-js="add-filter-content-editable"]') as HTMLElement
        editableContent.innerHTML = ''
      }
    }, [searchFilters])

    useEffect(() => {
      if (closedMenus) {
        INPUT_REF?.current?.blur()
        setSearchFilters('')
      }
    }, [closedMenus])

    const showLabel = useMemo(() => isMenuOpen && !openedByChip, [isMenuOpen && !openedByChip])

    const disableChipKeyboardNavigation = () => setChipsKeyboardNavigationDisabled(true)

    useEffect(() => {
      const input = document.querySelector('[data-js="add-filter-content-editable"]')
      setHasFocus(document.activeElement === input)
    }, [document.activeElement])

    return (
      <SCWrapper
        show={show}
        data-js="add-button-filter"
        hasFiltersApplied={hasFiltersApplied}
        isMenuOpen={isMenuOpen}
        openedByChip={openedByChip}
        notTypeable={notTypeable}
        isSimple={isSimple}
        hasFocus={hasFocus}
        showLabel={showLabel}
      >
        {!searchFilters && (
          <SCButtonWrapper
            id={addButtonId}
            onClick={handleClick}
            ref={ref}
            showLabel={showLabel}
            onBlur={disableChipKeyboardNavigation}
            data-robot-id="filters-add-button"
            isMenuOpen={isMenuOpen}
            isSimple={isSimple}
          >
            {isSimple && !showLabel && (
              <Plus
                width="18px"
                height="18px"
                color={isMenuOpen && showLabel ? Colors.buttons.activeDefault : Colors.colors.primary.main}
              />
            )}
            {(showLabel || !isSimple) && !searchFilters && (
              <SCLabel
                showLabel={(showLabel || !isSimple) && !searchFilters}
                isMenuOpen={isMenuOpen}
                data-js="add-filter-button"
                data-robot-id="filters-add-label"
              >
                + {t('addFilter')}
              </SCLabel>
            )}
          </SCButtonWrapper>
        )}

        <SCEditableContent
          data-js="add-filter-content-editable"
          role="input"
          contentEditable
          ref={INPUT_REF}
          onInput={handleInput}
          onBlur={handleBlurInput}
          searchValue={searchFilters}
          data-placeholder={`+ ${t('addFilter')}`}
        />
      </SCWrapper>
    )
  }
)
