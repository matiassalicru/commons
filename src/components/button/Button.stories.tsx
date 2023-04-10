import { Story, Meta } from '@storybook/react'
// UI Components
import { Button } from './Button'
// Interface
import { ButtonProps } from './button.interface'

const customProps: ButtonProps = {
  text: 'Aceptar',
  onClickAction: () => {
    // Click action default button
  },
  variant: 'primary',
}

export default {
  title: 'Commons/Button',
  component: Button,
  args: { ...customProps },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const BUTTON = Template.bind({})

BUTTON.storyName = 'Button'
