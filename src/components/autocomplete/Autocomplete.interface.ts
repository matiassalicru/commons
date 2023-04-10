/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Translations {
  noResult?: string
  placeholder?: string
}

export type VariantType = 'filled' | 'outlined' | 'standard'

export type Item = any

export type OptionList = Item[]

export interface AutocompleteProps {
  /**
   * List to be mapped
   */
  optionList: OptionList
  /**
   * Callback to obtain the label of items displayed in the dropdown UI. (1)
   */
  getOptionLabel: (item: Item) => string
  handleSelectItem: (item: Item) => void
  inputId?: string
  /**
   * Callback to group list items in the dropdown. (1)
   */
  groupBy?: (item: Item) => string
  /**
   * Callback for events on open the autocomplete.
   */
  handleOpenList?: () => void
  translations: Translations
  variant?: VariantType
  maxWidth?: number
  label?: string
  customIcon?: string
  hasError?: boolean
  errorMessage?: string
}

export interface AutocompleteStyleProps {
  maxWidth?: number
  hasLabel?: boolean
  hasCustomIcon?: boolean
}

/**
 * (1) Need to return a prop in a listed object.
 * @fn (option) => option.propOfTypeString
 */
