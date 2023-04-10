import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InputHourButton } from './InputHourButton'

export default {
  title: 'Commons/ChargeInputHourButton',
  component: InputHourButton,
} as ComponentMeta<typeof InputHourButton>

const Template: ComponentStory<typeof InputHourButton> = args => {
  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '100px', marginLeft: '50px', flexDirection: 'row' }}>
      <InputHourButton {...args} taskIdComments={144} />
      <InputHourButton {...args} taskIdComments={145} />
      <InputHourButton {...args} taskIdComments={143} />
    </div>
  )
}

export const InputHourButtonStory = Template.bind({})

InputHourButtonStory.args = {
  tooltipComments: '',
  handleDeleteSuggestion: () => null,
  handleAcceptSuggestion: () => null,
  handleAcceptTracked: () => null,
  hourSuggested: 0,
  minutesSuggested: 0,
  hourTracked: 2,
  minuteTracked: 0,
  enabledComments: true,
  hasComments: false,
  onClickActionComments: () => null,
  disabledComments: false,
  wordings: {
    buttonAccept: 'Accept',
    buttonDecline: 'Decline',
    buttonEdit: 'Edit',
  },
  permissions: {
    edit: true,
    delete: true,
  },
}
