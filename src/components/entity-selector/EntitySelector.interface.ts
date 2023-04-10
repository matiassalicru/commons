import React from 'react'

export interface SelectProps {
  // Select title
  selectTitle: string
  // Search input's placeholder
  inputPlaceHolder?: string
  valueInput?: string
  // Search input's on change
  onChangeInput?: () => void
  // Click on close button
  onClickCloseButton?: () => void
  children?: React.ReactNode[] | React.ReactNode
  loading?: boolean
}
