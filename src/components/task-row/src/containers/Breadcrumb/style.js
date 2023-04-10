import styled, { css } from 'styled-components'

export const LYBreadcrumb = styled.div`
  display: flex;
  align-items: end;
  color: #919191;
  padding-left: 1px;
  ${({ deliverable }) =>
    deliverable &&
    css`
      margin-bottom: 5px;
    `}
  font-size: 10px;
  height: ${({ childQ }) => (childQ ? '18px' : '15px')};
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const SCTaskTitle = styled.p`
  margin: 0;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
`
