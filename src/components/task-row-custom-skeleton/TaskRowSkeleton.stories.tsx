import { Story, Meta } from '@storybook/react'
// UI Components
import { TaskRowSkeleton } from './TaskRowSkeleton'
import { TaskRowSkeletonProps } from './TaskRowSkeleton.interface'

// Utils
import { defaultColumns } from './utils/constants'

export default {
  title: 'Commons/skeletons',
  component: TaskRowSkeleton,
  args: {
    quantity: 5,
    isLargeTask: true,
    hasCheckBox: false,
    columns: defaultColumns,
  },
  argTypes: {
    hasCheckBox: {
      control: { type: 'select', options: ['true', 'false'] },
    },
    isLargeTask: {
      control: { type: 'select', options: ['true', 'false'] },
    },
  },
} as Meta

const Template: Story<TaskRowSkeletonProps> = args => <TaskRowSkeleton {...args} />

export const TASK_ROW_SKELETON = Template.bind({})

TASK_ROW_SKELETON.storyName = 'CustomTaskRow Skeleton'
