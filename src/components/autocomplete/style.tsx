import styled from 'styled-components'
import { AutocompleteStyleProps } from './Autocomplete.interface'

export const SCWrapper = styled.div<AutocompleteStyleProps>`
  .MuiInputBase-root {
    cursor: auto !important;
  }

  .MuiAutocomplete-popupIndicatorOpen {
    ${({ hasCustomIcon }) => hasCustomIcon && `transform: none !important;`}
  }

  .MuiAutocomplete-endAdornment {
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .commons-autocomplete-custom-icon {
    font-size: 20px !important;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiFormHelperText-contained {
    margin-left: 0 !important;
  }
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
`
