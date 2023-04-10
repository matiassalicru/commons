import styled from 'styled-components'

export const SCWrapper = styled.div`
  background: white;
  border-radius: 6px;
  border: solid 1px #ebebeb;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  color: #8e8e8e;
  margin: 5px;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  width: 250px;

  &:before,
  &:after {
    content: '';
    border: 8px solid transparent;
    border-bottom-color: #ebebeb;
    bottom: 100%;
    left: 113px;
    position: absolute;
  }

  &:after {
    border: 7px solid transparent;
    border-bottom-color: #ffffff;
    left: 114px;
  }
`

export const SCConfirmButton = styled.button`
  background: none;
  width: 95%;
  color: #ffffff;
  font-size: 15px;
  height: 36px;
  padding: 9px 27.7px 9px 28px;
  opacity: 0.8;
  background-color: #0094ca;
  border-radius: 1px;
  border: none;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #008cbd;
  }

  &:disabled {
    background-color: #ebebeb;
    color: #5a5a5a;
    cursor: unset;
  }
`

export const SCBackdrop = styled.div`
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
`
