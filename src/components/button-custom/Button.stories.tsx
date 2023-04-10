import { Story, Meta } from '@storybook/react'
// UI Components
import { ButtonCustom } from './ButtonCustom'
// Interface
import { ButtonCustomProps } from './ButtonCustom.interface'

const customProps: ButtonCustomProps = {
  children: '+ Nuevo',
  color: '#ffffff',
  backgroundColor: '#0094ca',
  fontSize: '14px',
  minWidth: 'auto',
  minHeight: 'auto',
  padding: '9px 12px',
  borderRadius: '3px',
  fontWeight: '500',
  onClick: () => {
    // do nothing
  },
  hoverBackground: '#0088b9',
  hoverColor: '#ffffff',
  textShadow: '0px 0px 1px #ffffff5c',
  boxShadow: '1px 1px 7px 1px hsl(240deg 17% 82%)',
  outlineColor: 'transparent',
  hoverOutlineColor: 'transparent',
}

export default {
  title: 'Commons/ButtonCustom',
  component: ButtonCustom,
  args: { ...customProps },
  argTypes: {
    variantSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
        defaultValue: 'medium',
      },
    },
    disabled: {
      control: {
        type: 'select',
        options: [true, false],
        defaultValue: false,
      },
    },
  },
} as unknown as Meta

const Template: Story<ButtonCustomProps> = args => <ButtonCustom {...args} />

export const BUTTON_CUSTOM = Template.bind({})
export const BUTTON_OUTLINE = Template.bind({})
export const BUTTON_CONTAINED = Template.bind({})
export const BUTTON_TEXT = Template.bind({})

BUTTON_CUSTOM.storyName = 'ButtonCustom'

BUTTON_OUTLINE.storyName = 'Button Outline'
BUTTON_OUTLINE.args = { variantButton: 'outline' }

BUTTON_CONTAINED.storyName = 'Button Contained'
BUTTON_CONTAINED.args = { variantButton: 'contained' }

BUTTON_TEXT.storyName = 'Button Text'
BUTTON_TEXT.args = { variantButton: 'text' }
