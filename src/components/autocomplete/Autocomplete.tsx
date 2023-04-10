import { ChangeEvent, ReactElement, SetStateAction, useState } from 'react'
// Material
import { TextField } from '@material-ui/core'
import { Autocomplete as MaterialAutocomplete, AutocompleteInputChangeReason } from '@material-ui/lab'
// Types
import { AutocompleteProps, Item, VariantType } from './Autocomplete.interface'
// Components
import { SvgIcon } from '../svg-icon/SvgIcon'
// Styles
import { SCWrapper } from './style'
// Constants
import { MATERIAL } from '../../constants/materialVariants'

export function Autocomplete({
  inputId = '',
  groupBy,
  handleSelectItem,
  handleOpenList = () => null,
  optionList,
  getOptionLabel,
  translations = {
    placeholder: '',
    noResult: '',
  },
  variant = MATERIAL.variants.filled as VariantType,
  label = '',
  customIcon = '',
  maxWidth,
  hasError = false,
  errorMessage = '',
}: AutocompleteProps): ReactElement {
  const [writtenValue, setWrittenValue] = useState('')

  /**
   * Cb fired when the user select an item
   */
  const handleOnChange = (_event: ChangeEvent, data: Item) => {
    handleSelectItem(data)
  }

  /**
   * Manage filtering of the autocomplete
   */
  const handleOnInputChange = (
    _event: ChangeEvent,
    newInputValue: SetStateAction<string>,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason === 'input') {
      setWrittenValue(newInputValue)
    }
    if (reason === 'reset') {
      setWrittenValue('')
    }
  }

  const showPopUpIcon = () => {
    if (!customIcon) return {}
    return {
      popupIcon: SvgIcon({ newClass: 'commons-autocomplete-custom-icon', iconName: customIcon }),
    }
  }

  return (
    <SCWrapper maxWidth={maxWidth} hasCustomIcon={!!customIcon} hasLabel={!!label}>
      <MaterialAutocomplete
        id={inputId}
        onInputChange={handleOnInputChange}
        inputValue={writtenValue}
        clearOnBlur
        blurOnSelect
        disableClearable
        options={optionList}
        getOptionLabel={getOptionLabel}
        groupBy={groupBy}
        autoHighlight
        noOptionsText={translations.noResult}
        onChange={handleOnChange}
        onOpen={handleOpenList}
        {...showPopUpIcon()}
        renderInput={params => (
          <TextField
            {...params}
            label={label}
            variant={variant}
            fullWidth
            placeholder={translations.placeholder}
            type={MATERIAL.types.text}
            InputLabelProps={{
              shrink: true,
            }}
            error={hasError}
            helperText={hasError ? errorMessage : ''}
          />
        )}
      />
    </SCWrapper>
  )
}
