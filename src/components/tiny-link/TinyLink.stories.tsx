import { Story, Meta } from '@storybook/react'
// UI Components
import { TinyLink } from './index'
import { TinyLinkProps } from './TinyLink.interface'

export default {
  title: 'Commons/Tiny link',
  component: TinyLink,
  args: {
    path: 'https://storybook.js.org/',
  },
} as Meta

const Template: Story<TinyLinkProps> = args => <TinyLink {...args} />

export const TINY_LINK = Template.bind({})

TINY_LINK.storyName = 'Tiny Link'
