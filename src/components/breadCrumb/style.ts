import styled from 'styled-components'

// Colors
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { WrapperProps } from './BreadCrumb.interface'

export const SCBreadCrumbsWrapper = styled.div<WrapperProps>`
  border-radius: 10.5px;
  padding: 0 ${({ theme }) => (theme === 'light' ? '0' : '8px')};
  background-color: ${({ theme }) => (theme === 'light' ? 'transparent' : Colors.grey[200])};
  text-align: center;
  width: fit-content;
  li {
    font-size: 10px !important;
  }
`
export const SCBreadCrumbItem = styled.div`
  font-size: 10px;
  color: #5a5a5a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`
