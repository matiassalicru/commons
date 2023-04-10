import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'

export const SCCIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translateX(-1px);
  z-index: 1;
`

export const SCCIWrapperHeader = styled.div`
  display: flex;
  width: 312px;
  cursor: pointer;
  background: ${Colors.info.main};
  align-items: center;
  padding: 16px;
  justify-content: space-between;
`

export const SCCIWrapperDate = styled.div`
  width: 100px;
`

export const SCCIYear = styled.p`
  color: ${Colors.grey[200]};
  font-size: 10px;
  margin: 0px;
`

export const SCCIDate = styled.p`
  color: #f9f9f9;
  font-size: 14px;
  margin: 0px;
  text-transform: capitalize;
`

export const SCCIWrapperIcon = styled.div`
  color: ${Colors.grey[200]};
`
