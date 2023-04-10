import { FC } from 'react'
import { ModalComponentProp } from './GenericModal.interface'
import { SCMCContainer, SCMCWrapper } from './style'

export const GenericModal: FC<ModalComponentProp> = ({ children, styles }) => (
  <SCMCContainer {...styles} data-testid="SCMCContainer">
    <SCMCWrapper {...styles}>{children}</SCMCWrapper>
  </SCMCContainer>
)
