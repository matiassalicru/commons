import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonWithCoachmark } from './ButtonWithCoachmark'

export default {
  title: 'Commons/ButtonWithCoachmark',
  component: ButtonWithCoachmark,
} as ComponentMeta<typeof ButtonWithCoachmark>

const Template: ComponentStory<typeof ButtonWithCoachmark> = args => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '50px' }}>
      <ButtonWithCoachmark buttonSize="small" buttonVariant="text" {...args}>
        <p>Button</p>
      </ButtonWithCoachmark>
    </div>
  )
}

export const ButtonWithCoachmarkStory = Template.bind({})

ButtonWithCoachmarkStory.args = {
  description: 'CoachMark',
  iconOnly: false,
  onClickButton: () => null,
}
