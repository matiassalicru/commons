// UI Components
import { EntitySelector } from './EntitySelector'

export default {
  title: 'Commons/Select Entity',
  component: EntitySelector,
  args: {
    selectTitle: 'Clients',
    inputPlaceHolder: 'Search',
    loading: true,
  },
}

const Template = args => <EntitySelector {...args} />

export const PRIORITY = Template.bind({})

PRIORITY.storyName = 'Select'
