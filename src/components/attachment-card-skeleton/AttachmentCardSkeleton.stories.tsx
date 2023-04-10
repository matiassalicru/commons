import { Story, Meta } from '@storybook/react'
// UI Components
import { AttachmentCardSkeleton } from './index'
import { AttachmentCardSkeletonProps } from './AttachmentCardSkeleton.interface'

export default {
  title: 'Commons/Skeletons/Attachment card skeleton',
  component: AttachmentCardSkeleton,
  args: {
    quantity: 1,
  },
} as Meta

const Template: Story<AttachmentCardSkeletonProps> = args => <AttachmentCardSkeleton {...args} />

export const ATTACHMENT_CARD_SKELETON = Template.bind({})

ATTACHMENT_CARD_SKELETON.storyName = 'Attachment card skeleton'
