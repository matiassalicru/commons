import { Story, Meta } from '@storybook/react'
// UI Components
import { CORLottie } from './CORLottie'
import { CORLottieProps } from './CORLottie.interface'

export default {
  title: 'Commons/Loaders/COR Lottie',
  component: CORLottie,
  args: {
    width: 60,
    height: 60,
  },
} as Meta

const Template: Story<CORLottieProps> = args => <CORLottie {...args} />

export const COR_LOTTIE = Template.bind({})

COR_LOTTIE.storyName = 'COR Lottie'
