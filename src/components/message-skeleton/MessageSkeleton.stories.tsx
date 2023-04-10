import { Story, Meta } from '@storybook/react'
// UI Components
import { MessageSkeleton } from './MessageSkeleton'
import { MessageSkeletonProps } from './MessageSkeleton.interface'

export default {
  title: 'Commons/Skeletons/Message skeleton',
  component: MessageSkeleton,
  args: {
    quantity: 5,
  },
} as Meta

const Template: Story<MessageSkeletonProps> = args => <MessageSkeleton {...args} />

export const MESSAGE_SKELETON = Template.bind({})

MESSAGE_SKELETON.storyName = 'Message skeleton'
