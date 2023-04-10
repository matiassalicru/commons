import styled from 'styled-components'

export const SCChildIndicator = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20px fit-content(100%) 1fr;

  i {
    font-size: 15px;
  }

  cursor: pointer;
  position: relative;
  align-content: center;
  height: 22px;
`
export const SCTextIndicator = styled.div`
  text-align: left;
  font-weight: 300;
  color: #919191;
`

export const SCIcon = styled.div`
  display: flex;
  align-items: center;
`
