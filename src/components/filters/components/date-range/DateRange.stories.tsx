import { Story, Meta } from '@storybook/react'
// UI Components
import { DateRange } from './DateRange'
// Types
import { DateRangeTypes } from './DateRange.interface'

export default {
  title: 'Commons/DateRange',
  component: DateRange,
  args: {
    toDate: null,
    fromDate: null,
    handleToDateChange: () => null,
    handlefromDateChange: () => null,
  },
  argTypes: {},
} as Meta

const Template: Story<DateRangeTypes> = args => <DateRange {...args} />

export const DATA_RANGE = Template.bind({})

DATA_RANGE.storyName = 'Date Range'
