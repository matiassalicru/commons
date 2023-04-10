import styled from 'styled-components'
import { motion } from 'framer-motion'
import Colors from '@projectcor/theme/lib/base/colors'
import { ChargeHourStyleProps } from './ChargedHour.interface'

export const SCCHWrapper = styled(motion.div)<ChargeHourStyleProps>`
  display: flex;
  height: 32px;
  ${({ mode, wrapperWidth }) => mode === 'charged' && `width: ${wrapperWidth}px;`}
  font-size: ${({ fontSize }) => fontSize}px;
  ${({ swapCss }) => swapCss && swapCss}
`

export const suggestedBackground = `
    border: solid 1px ${Colors.transparent.main};
    padding: 2px 5px;
    color: ${Colors.info.main};
    border-radius: 5px;
    transition: background-color 0.5s ease;
`

export const SCSHLabelHour = styled.div`
  margin-right: 6px;
  display: flex;
  align-items: center;
  background-color: #d9f4ff;
  ${suggestedBackground}
  cursor: pointer;
  &:hover {
    background-color: #0f9bcd;
    color: white;
  }
`

export const SCCHLabelHour = styled.div<ChargeHourStyleProps>`
  margin-right: 6px;
  display: flex;
  ${({ estimateEnabled }) => estimateEnabled && 'font-weight:800;'}
  ${({ variant, enableEstimateButton }) => variant && enableEstimateButton && `color: ${Colors.info.main}`};
  cursor: ${({ variant }) => (!variant ? 'pointer' : 'default')};
`

export const SCCHInputContainer = styled.div<ChargeHourStyleProps>`
  display: flex;
  align-items: center;
  margin-right: 6px;
  ${({ estimateEnabled }) => estimateEnabled && 'font-weight: 800;'}
  ${({ variant, enableEstimateButton }) => enableEstimateButton && variant && `color: ${Colors.info.main}`}

  ${({ mode }) =>
    mode === 'suggested' &&
    `background-color: ${({ enableEdit }) => (enableEdit ? `${Colors.white.main}` : '#d9f4ff')};
  ${suggestedBackground}`}
`
export const SCCHEditContainer = styled.div<Pick<ChargeHourStyleProps, 'mode'>>`
  display: flex;
  font-weight: 400;
  ${({ mode }) => mode === 'suggested' && `align-items: center;`}
`
export const SCCHInfoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
  font-weight: 500;
`

export const SCCHTime = styled.div<Pick<ChargeHourStyleProps, 'enableEstimateButton' | 'hasThreeDigit'>>`
  width: ${({ enableEstimateButton }) => (enableEstimateButton ? '24px' : '18px')};
  ${({ hasThreeDigit }) => hasThreeDigit && 'width:29px;'};
  text-align: center;
`

export const SCCHInput = styled.input<ChargeHourStyleProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 0;
  line-height: 0;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid;
  text-align: center;
  transition: color 0.2s, border-color 0.2s;
  width: 18px;
  ${({ estimateEnabled }) => estimateEnabled && `font-weight: 800; width: 31px;`}
  -moz-appearance: textfield;

  ${({ mode }) => mode === 'suggested' && `color: ${Colors.info.main};`}
  ${({ variant, enableEstimateButton }) => enableEstimateButton && variant && `color: ${Colors.info.main};`}

  &:disabled {
    opacity: 0.4;
  }
  &:focus {
    background: inherit;
    border-bottom: 1px solid #3a94cb;
    outline: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const SCCHEditWrapper = styled(motion.div)`
  display: flex;
`
export const SCCHActionWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const SCCHSpace = styled.div<Pick<ChargeHourStyleProps, 'enableEstimateButton' | 'variant'>>`
  width: 10px;
  ${({ enableEstimateButton }) => enableEstimateButton && 'font-weight:800;'};
  ${({ variant }) => variant && `color: ${Colors.info.main};`};
`
export const SCCHButtonSpace = styled.div<Pick<ChargeHourStyleProps, 'space'>>`
  width: ${({ space }) => space}px;
`
export const SCCHInfoContextContainer = styled.div`
  align-items: center;
  display: flex;
`
