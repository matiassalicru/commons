import { Story, Meta } from '@storybook/react'
// UI Components
import { SpinnerLottie } from './SpinnerLottie'
import { SpinnerLottieProps } from './SpinnerLottie.interface'

export default {
  title: 'Commons/Loaders/Spinner Lottie',
  component: SpinnerLottie,
  args: {
    size: 60,
    withShadow: false,
    background: '#FFFFFF',
    type: 'default',
  },
} as Meta

const Template: Story<SpinnerLottieProps> = args => <SpinnerLottie {...args} />

export const SPINNER_LOTTIE = Template.bind({})

SPINNER_LOTTIE.storyName = 'Spinner Lottie'
