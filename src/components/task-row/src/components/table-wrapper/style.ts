import styled, { css } from 'styled-components'

// Types
import { TableWrapperTypes, gridConfigTypes } from './TableWrapper.interface'

export const LARGE_SIZE = 73
export const SMALL_SIZE = 57

export const getGridColumns = (columns: string[], columnsConfig: gridConfigTypes): string => {
  let value = ''
  const newColumns = { ...columnsConfig }

  columns.forEach(element => {
    value = `${value} ${newColumns[element].width} `
  })

  return value
}

export const SCTableWrapper = styled.div<TableWrapperTypes>`
  width: auto;
  display: grid;
  ${({ columns, columnsConfig }) =>
    css`
      grid-template-columns: ${getGridColumns(columns, columnsConfig)};
    `}
  height: ${({ isLargeTask }) => (isLargeTask ? LARGE_SIZE : SMALL_SIZE)}px;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  transition: box-shadow 0.3s;
  border-bottom: 1px solid #ebebeb;

  :hover {
    box-shadow: 0 2px 10px 0 #cccccc;
  }

  :hover {
    > .current-status-wrapper {
      width: 8px;
    }
  }
`
