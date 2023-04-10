import styled from 'styled-components'

export const SCListWrapper = styled.div`
  max-height: 280px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 232px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`

export const SCImage = styled.img`
  width: 232px;
`

export const SCText = styled.p`
  color: #a5a5a5;
  font-size: 16px;
  text-align: center;
`

export const SCEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 232px;
`
