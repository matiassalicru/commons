import { Story, Meta } from '@storybook/react'
// UI Components
import { HelperTip } from './HelperTip'
import { HelperTipProps } from './HelperTip.interface'

export default {
  title: 'Commons/HelperTip',
  component: HelperTip,
  args: {
    wordingTip: 'Wording tip!',
    withTip: true,
  },
} as Meta

const Template: Story<HelperTipProps> = args => <HelperTip {...args} />

export const HELPER_TIP = Template.bind({})

HELPER_TIP.storyName = 'Helper tip'
