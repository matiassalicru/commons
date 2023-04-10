import React from 'react'
// Styles
import { SCWrapperEmptyResult, SCImage, SCContentState, SCText } from './style'
// Assets
import SVG from '../../../assets/svg/search.svg'

export function EmptyResult({ translations }) {
  return (
    <SCWrapperEmptyResult>
      <SCContentState>
        <SCImage src={SVG} />
        <SCText>{translations.withoutResults || ''}</SCText>
      </SCContentState>
    </SCWrapperEmptyResult>
  )
}
