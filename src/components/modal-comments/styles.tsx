import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { ModalCommentsStyleProps } from './ModalComments.interface'

export const SCMCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: fit-content;
  height: fit-content;
  box-shadow: rgb(79 79 79 / 40%) 0px 2px 10px 0px;
  border: solid 1px ${Colors.grey[100]};
  padding: 16px;
  max-width: 500px;
  max-height: 500px;
`
export const SCMCTextArea = styled.textarea<Pick<ModalCommentsStyleProps, 'border'>>`
  resize: none;
  padding: 12px;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #333333;
  width: 300px;
  height: 150px;
  border-radius: 4px;
  ${({ border }) => border && `border: 1px solid ${border}`};
  outline: none;
  margin-bottom: 4px;
  :focus {
    border: 1px solid #a4adb5;
  }
  &::placeholder {
    color: ${Colors.grey[500]};
  }
`

export const SCMCWrapperButton = styled.div<Pick<ModalCommentsStyleProps, 'error'>>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ error }) => (error ? '0' : '14px')};
  gap: 8px;
`

export const SCMCMessageError = styled.div`
  font-size: 10px;
  color: ${Colors.error.main};
  height: 14px;
  width: fit-content;
`
