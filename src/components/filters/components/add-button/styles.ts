import styled from 'styled-components'

// Utils
import Colors from '@projectcor/theme/lib/base/colors'
// Types
import { WrapperTypes, EditableStyles, ButtonTypes } from './AddButton.interface'

const getBorderColor = (isSimple: boolean, isMenuOpen: boolean, showLabel: boolean) => {
  if (isMenuOpen && showLabel) {
    return Colors.buttons.activeDefault
  }

  if (isSimple) {
    return Colors.colors.primary.main
  }

  return Colors.colors.disabled
}

const getWidthForWrapper = (hasFiltersApplied: boolean, isMenuOpen: boolean, isSimple: boolean, showLabel: boolean) => {
  if ((isMenuOpen && showLabel) || (!hasFiltersApplied && !isMenuOpen && !isSimple)) {
    return 'auto'
  }
  if (isMenuOpen && !hasFiltersApplied) return 'auto'
  return '28px'
}

export const SCWrapper = styled.div<WrapperTypes>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  border-radius: 24px;
  border: 1px solid ${({ isSimple, isMenuOpen, showLabel }) => getBorderColor(isSimple, isMenuOpen, showLabel)};
  color: ${({ showLabel }) => (showLabel ? Colors.buttons.activeDefault : Colors.colors.primary.main)};
  font-size: 12px;
  transition: opacity 0.3s;
  justify-content: center;
  padding: ${({ isSimple }) => (isSimple ? '6px' : '6px 8px')};
  position: relative;
  width: ${({ hasFiltersApplied, isMenuOpen, isSimple, showLabel }): string =>
    getWidthForWrapper(hasFiltersApplied, isMenuOpen, isSimple, showLabel)};
  height: 28px;
  box-sizing: border-box;

  &:focus-within {
    z-index: 100000;
    opacity: 1 !important;
    width: auto;
    border-color: ${({ hasFocus }) => (hasFocus ? Colors.buttons.activeDefault : Colors.buttons.main)};

    span {
      display: inline-block;
    }

    button {
      position: absolute;
      opacity: 0;
      z-index: 10;
      width: 120px;
      height: 100%;
      left: 0;
      cursor: ${({ notTypeable }) => (!notTypeable ? 'text' : 'pointer')};
    }
  }
`

export const SCButtonWrapper = styled.button<ButtonTypes>`
  display: flex;
  align-items: flex-start;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: ${({ isSimple, isMenuOpen, hasFocus }) => (isSimple && !isMenuOpen && hasFocus ? '18px' : '12px')};
  align-items: center;
  padding: 0;
  font-family: 'Work Sans';
  color: ${({ isMenuOpen, showLabel }) =>
    isMenuOpen && showLabel ? Colors.buttons.activeDefault : Colors.colors.primary.main};

  &:hover {
    color: ${Colors.buttons.hoverDefault};
    div {
      color: ${Colors.buttons.hoverDefault};
    }
    svg g path {
      fill: ${Colors.buttons.hoverDefault};
    }
  }
`

export const SCLabel = styled.div<ButtonTypes>`
  color: ${({ isMenuOpen }) => (isMenuOpen ? Colors.buttons.activeDefault : Colors.colors.primary.main)};
  line-height: normal;
  font-size: 12px;
`

export const SCEditableContent = styled.span<EditableStyles>`
  box-sizing: border-box;
  display: ${({ searchValue }) => (searchValue ? 'block' : 'none')};
  outline: none;
  text-align: left;
  max-width: 232px;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  line-height: normal;

  &:empty:before {
    content: attr(data-placeholder);
    color: ${Colors.buttons.activeDefault};
  }

  &:focus {
    display: block;
  }

  br {
    display: none;
  }
`
