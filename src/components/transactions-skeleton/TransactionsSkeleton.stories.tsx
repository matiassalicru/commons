import { Story, Meta } from '@storybook/react'
// UI Components
import { TransactionsSkeleton } from './TransactionsSkeleton'
import { TransactionsSkeletonProps } from './TransactionsSkeleton.interface'

export default {
  title: 'Commons/Skeletons/Transactions Skeleton',
  component: TransactionsSkeleton,
  args: {
    quantity: 2,
    type: 'outcome',
    isSubitem: false,
  },
  argTypes: {
    type: {
      control: { type: 'select', options: ['outcome', 'income'] },
    },
    isSubitem: {
      control: { type: 'select', options: [true, false] },
    },
  },
} as Meta

const Template: Story<TransactionsSkeletonProps> = args => <TransactionsSkeleton {...args} />

export const TRANSACTIONS_SKELETON = Template.bind({})

TRANSACTIONS_SKELETON.storyName = 'Transactions Skeleton'
