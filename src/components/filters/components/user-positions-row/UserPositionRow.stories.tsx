import { Story, Meta } from '@storybook/react'
// UI Components
import { UserPositionsRow } from './UserPositionsRow'
// Types
import { IUserPositionsRow } from './UserPositionRow.interface'

export default {
  title: 'Commons/UserPositionsRow',
  component: UserPositionsRow,
  args: {
    id: 1234,
    name: 'Fullstack developer Sr',
    categoryName: 'categoryName',
    onSelect: () => null,
    isSelected: true,
  },
  argTypes: {},
} as Meta

const Template: Story<IUserPositionsRow> = args => <UserPositionsRow {...args} />

export const USERPOSITIONROW = Template.bind({})
