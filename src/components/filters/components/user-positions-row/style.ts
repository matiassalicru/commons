import styled from 'styled-components'

export const SCInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`

const LIST_ITEMS_INFO = `
  color: #5a5a5a;
  word-break: keep-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const SCPositionName = styled.div`
  grid-row: 1;
  font-size: 14px;
  ${LIST_ITEMS_INFO};
`

export const SCCategoryName = styled.div`
  grid-row: 2;
  font-size: 12px;
  ${LIST_ITEMS_INFO};
`
