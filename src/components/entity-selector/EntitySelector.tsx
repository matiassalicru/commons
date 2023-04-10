import { ReactElement } from 'react'
// Styles
import { SCContent, SCHeader, SCContentSearch, SCWrapperInput, SCInput, SCWrapperIcon, SCListResults } from './style'
// UI Components
import { SvgIcon } from '../svg-icon'
import { Skeleton } from './skeleton'
// Interface
import { SelectProps } from './EntitySelector.interface'

export const EntitySelector = ({
  selectTitle,
  inputPlaceHolder = '',
  valueInput = '',
  onChangeInput = () => null,
  onClickCloseButton = () => null,
  children,
  loading = false,
}: SelectProps): ReactElement => {
  return (
    <SCContent>
      <SCHeader>
        {selectTitle}
        <SCWrapperIcon onClick={onClickCloseButton}>
          <SvgIcon iconName="times" />
        </SCWrapperIcon>
      </SCHeader>
      <SCContentSearch>
        <SCWrapperInput>
          <SCInput placeholder={inputPlaceHolder} value={valueInput} onChange={onChangeInput} />
          <SvgIcon iconName="search" />
        </SCWrapperInput>
      </SCContentSearch>
      <SCListResults>{loading ? <Skeleton /> : children}</SCListResults>
    </SCContent>
  )
}
