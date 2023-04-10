import { Story, Meta } from '@storybook/react'
// UI Components
import { ButtonIconCustom } from './ButtonIconCustom'
import { ButtonIconCustomProps } from './ButtonIconCustom.interface'

export default {
  title: 'Commons/ButtonIconCustom',
  component: ButtonIconCustom,
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
    forTooltip: '',
    withTip: false,
    wordingTip: '',
    enabled: true,
    place: 'top',
    dataRobotId: 'commons-icon-custom',
    htmlMode: false,
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
    htmlMode: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    withTip: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta

const Template: Story<ButtonIconCustomProps> = args => <ButtonIconCustom {...args} />

export const BUTTON_ICON = Template.bind({})

BUTTON_ICON.storyName = 'Button icon custom'
