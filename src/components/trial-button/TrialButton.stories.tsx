import { Story, Meta } from '@storybook/react'
// UI Components
import { TrialButton } from './index'
// Types
import { TrialButtonProps } from './TrialButton.interface'

export default {
  title: 'Commons/TrialButton',
  component: TrialButton,
  args: {
    title: 'Buy feature',
    isInteractive: true,
    captionTextContent: 'Trial version: 16 days left',
    modalTitle: 'Lorem ipsum dolor sit amet',
    modalTextContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    modalConfirmButtonLabel: 'Continue',
    showConfirmButton: true,
  },
} as Meta

const Template: Story<TrialButtonProps> = args => <TrialButton {...args} />

export const TRIAL_BUTTON = Template.bind({})

TRIAL_BUTTON.storyName = 'Trial button'
