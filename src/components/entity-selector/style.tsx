import styled from 'styled-components'

export const SCContent = styled.div`
  width: 217px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`
export const SCHeader = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: #a4adb5;
  font-size: 14px;
  padding: 7px 10px;
`

export const SCContentSearch = styled.div`
  width: auto;
  padding: 8px 10px;
  background: #f7f7f7;
`
export const SCWrapperInput = styled.div`
  position: relative;
  color: #757575;

  i {
    position: absolute;
    left: 9px;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
`

export const SCInput = styled.input`
  color: #707070;
  padding-left: 28px;
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 15px;

  &:focus {
    outline-style: none;
  }
`

export const SCWrapperIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SCListResults = styled.ul`
  margin: 0;
  padding: 0;
  background: #ffffff;
  border-radius: 0 0 5px 5px;
  height: 173px;
  overflow-y: overlay;
`

export const SCWrapperCloseButton = styled.div`
  color: #a4adb5;
`
