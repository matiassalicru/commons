import { Story, Meta } from '@storybook/react'
// UI Components
import { AlertPortal } from './AlertPortal'
// Interface
import { AlertPortalProps, VariantType, PositionType } from './AltertPortal.interface'

const customProps: AlertPortalProps = {
  position: PositionType.centerBottom,
  text: '',
  variant: VariantType.success,
  icon: '',
  timeOut: 3500,
  onClose: () => {
    // Story book Close function alert portal
  },
  idPortal: 'root',
  spinner: false,
  withLink: undefined,
}

export default {
  title: 'Commons/AlertPortal',
  component: AlertPortal,
  args: { ...customProps },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: VariantType,
      },
    },
    position: {
      control: {
        type: 'select',
        options: PositionType,
      },
    },
    spinner: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta

const Template: Story<AlertPortalProps> = args => <AlertPortal {...args} />

export const ALERTPORTAL = Template.bind({})

ALERTPORTAL.storyName = 'Alert Portal'
