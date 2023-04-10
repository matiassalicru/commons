import styled from 'styled-components'

export const SCIconContainer = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  width: 40px;
  color: #898e95;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #333333;
  }
`

export const SCUnreadIndicator = styled.span`
  position: absolute;
  bottom: 12px;
  right: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #fff;
  height: 16px;
  padding: 0 4px;
  min-width: 16px;
  font-size: 10px;
  background-color: #ed2c50;
  visibility: ${({ totalUnreadMessages }) => (!!totalUnreadMessages && 'visible') || 'hidden'};
`
