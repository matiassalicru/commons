import { FC } from 'react'
import { ThumbsUp } from '@projectcor/icons/lib/components/ThumbsUp'
import { ThumbsDown } from '@projectcor/icons/lib/components/ThumbsDown'
import { Pencil } from '@projectcor/icons/lib/components/Pencil'
import { SCMSOContainer, SCMSOWrapper } from './ModalSuggestionOptions.style'
import { ModalSuggestionOptionsProps } from './ModalSuggestionOptions.interface'
import { ButtonWithCoachmark } from '../../../button-coachmark/ButtonWithCoachmark'

export const ModalSuggestionOptions: FC<ModalSuggestionOptionsProps> = ({
  handleEditHour,
  handleDenyHour,
  handleConfirmHour,
  wordings,
}) => {
  return (
    <SCMSOContainer>
      <SCMSOWrapper>
        <ButtonWithCoachmark
          success
          buttonSize="small"
          buttonVariant="text"
          description={wordings.buttonAccept}
          onClickButton={handleConfirmHour}
        >
          <ThumbsUp color="#00A500" />
        </ButtonWithCoachmark>
        <ButtonWithCoachmark
          error
          buttonSize="small"
          buttonVariant="text"
          description={wordings.buttonDecline}
          onClickButton={handleDenyHour}
        >
          <ThumbsDown color="#C70505" />
        </ButtonWithCoachmark>
        <ButtonWithCoachmark
          iconOnly
          buttonSize="small"
          buttonVariant="text"
          description={wordings.buttonEdit}
          onClickButton={handleEditHour}
        >
          <Pencil color="inherit" />
        </ButtonWithCoachmark>
      </SCMSOWrapper>
    </SCMSOContainer>
  )
}
