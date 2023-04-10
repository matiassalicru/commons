import { Story, Meta } from '@storybook/react'
// UI Components
import { ButtonSeeMore } from './ButtonSeeMore'
import { ButtonSeeMoreProps } from './ButtonSeeMore.interface'

export default {
  title: 'Commons/ButtonSeeMore',
  component: ButtonSeeMore,
  args: {
    text: 'See more',
    color: '',
    borderColor: '',
  },
  argTypes: {
    borderColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonSeeMoreProps> = args => <ButtonSeeMore {...args} />

export const BUTTON_SEE_MORE = Template.bind({})

BUTTON_SEE_MORE.storyName = 'Button see more'
