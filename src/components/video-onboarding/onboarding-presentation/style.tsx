import styled, { css } from 'styled-components'
import { OnboardingPresentationStyleProps } from './OnboardingPresentation.interface'

export const SCMain = styled.div<Pick<OnboardingPresentationStyleProps, 'isCollapsed'>>`
  position: relative;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #e9e9e9;
  border: 1px solid #ebebeb;
  overflow: hidden;

  ${({ isCollapsed }) =>
    isCollapsed
      ? css`
          max-width: 400px;
          min-height: 70px;
        `
      : css`
          max-width: 700px;
          min-height: 170px;
        `}
`

export const SCBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 350px;
`

export const SCWrapperClose = styled.div<Pick<OnboardingPresentationStyleProps, 'letsRotate'>>`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  transition: transform 0.3s;
  transform: ${({ letsRotate }) => (letsRotate ? 'rotate(180deg)' : 'rotate(0)')};
`
