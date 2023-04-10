import { Story, Meta } from '@storybook/react'
// UI Components
import { ButtonIconCustomWithTooltip } from './ButtonIconCustomWithTooltip'
import { ButtonIconCustomProps } from './ButtonIconCustom.interface'

export default {
  title: 'Commons/ButtonIconCustomWithTooltip',
  component: ButtonIconCustomWithTooltip,
  args: {
    icon: 'times',
    size: 30,
    iconSize: 15,
    onHoverBackground: '',
    onHoverColor: '',
    onHoverBorder: '',
    radius: 'circle',
    borderSize: 0,
    borderColor: '',
    background: '',
    color: '',
    onClikAction: () => {
      // Click action default button
    },
    wordingTip: 'Tooltip title',
    enabled: true,
    place: 'top',
    dataRobotId: 'commons-icon-custom',
    customPointer: '',
  },
  argTypes: {
    place: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
    },
    onHoverBackground: { control: 'color' },
    onHoverColor: { control: 'color' },
    onHoverBorder: { control: 'color' },
    borderColor: { control: 'color' },
    background: { control: 'color' },
    color: { control: 'color' },
    withTip: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta

const Template: Story<ButtonIconCustomProps> = args => <ButtonIconCustomWithTooltip {...args} />

export const BUTTON_ICON = Template.bind({})

BUTTON_ICON.storyName = 'Button icon custom'
