import { Story, Meta } from '@storybook/react'
// UI Components
import { AvatarUser } from './AvatarUser'
import { AvatarSize, AvatarUserProps } from './AvatarUser.interface'

export default {
  title: 'Commons/AvatarUser',
  component: AvatarUser,
  args: {
    picture: 'user.png',
    size: AvatarSize.small,
    firstName: 'Leandro',
    lastName: 'Videla',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: AvatarSize,
      },
    },
  },
} as Meta

const Template: Story<AvatarUserProps> = args => (
  <div style={{ display: 'flex', gap: '15px' }}>
    <AvatarUser {...args} />
  </div>
)

export const USER_CAPACITY = Template.bind({})

USER_CAPACITY.storyName = 'Avatar user'
