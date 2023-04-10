import styled from 'styled-components'

export const SCLightBox = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  display: grid;
  width: 100%;
  height: 100vh;
`

export const SCContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80%;
`

export const SCWrapperFile = styled.div`
  padding: 0 15px;
  text-align: center;
  width: 100vw;
  height: calc(100vh - 200px);
`

export const SCWrapperVideo = styled.div`
  position: relative;
  height: 540px;
  width: 960px;
  margin: 0 auto;
`

export const SCWrapperButton = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(calc(-100% + -15px));
`

export const SCVideo = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`
