import styled from 'styled-components'

export const SCActionBar = styled.div`
  display: flex;
  z-index: 1;
  width: 430px;
  height: 60px;
  box-sizing: border-box;
  padding: 20px;
  position: fixed;
  background: #fff;
  align-items: center;
  border-radius: 36px;
  justify-content: center;
  border: 1px solid #e6e6e6;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`

export const SCCounter = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #707070;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e6e6e6;
  padding-right: 12px;
  margin-right: 12px;
`

export const SCBarIcons = styled.div`
  height: 30px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`

export const SCMenus = styled.div`
  position: relative;
  left: -177px;
  top: 15px;
`
