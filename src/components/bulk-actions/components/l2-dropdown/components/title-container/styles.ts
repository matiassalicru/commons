import styled from 'styled-components'

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  width: 100%;
  height: 19px;
  cursor: pointer;
  padding: 15px 0;
  box-sizing: border-box;
`

export const SCTitleContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 0;
`

export const SCTitle = styled.span`
  justify-self: start;
  width: fit-content;
  margin: 3px 0;
  color: #8e8e8e;
  font-size: 14px;
`

export const SCIconWrapper = styled.div`
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0 16px;

  &:last-child {
    color: #a4adb5;
    font-size: 14px;
  }
`
