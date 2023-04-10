import { Story, Meta } from '@storybook/react'
// UI Components
import { UserCapacity } from './UserCapacity'
import { AvatarSize, UserCapacityProps, PlaceArray } from './UserCapacity.interface'

export default {
  title: 'Commons/UserCapacity',
  component: UserCapacity,
  args: {
    picture: 'user.png',
    remainingHours: 20,
    size: 'small',
    firstName: 'Leandro',
    lastName: 'Videla',
    wordingTooltip: 'Leandro Videla',
    fromComponent: 'user-capacity-photo',
    showTootltip: true,
    place: 'top',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: AvatarSize,
      },
    },
    showTootltip: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    place: {
      control: {
        type: 'select',
        options: PlaceArray,
      },
    },
  },
} as Meta

const Template: Story<UserCapacityProps> = args => (
  <div style={{ display: 'flex', gap: '15px' }}>
    <UserCapacity {...args} />
  </div>
)

export const USER_CAPACITY = Template.bind({})

USER_CAPACITY.storyName = 'User capactity'
