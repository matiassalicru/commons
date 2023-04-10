import { Story, Meta } from '@storybook/react'
// UI Components
import { TaskSkeleton } from './TaskSkeleton'
import { TaskSkeletonProps } from './TaskSkeleton.interface'

export default {
  title: 'Commons/Skeletons/Task Skeleton',
  component: TaskSkeleton,
  args: {
    quantity: 5,
    withFirstItem: false,
    withActions: true,
  },
  argTypes: {
    withFirstItem: {
      control: { type: 'select', options: ['true', 'false'] },
    },
    withActions: {
      control: { type: 'select', options: ['true', 'false'] },
    },
  },
} as Meta

const Template: Story<TaskSkeletonProps> = args => <TaskSkeleton {...args} />

export const TASK_SKELETON = Template.bind({})

TASK_SKELETON.storyName = 'Task Skeleton'
