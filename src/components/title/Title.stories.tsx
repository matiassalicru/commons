import { Story, Meta } from '@storybook/react'
// UI Components
import { Title } from './Title'
import { TitleProps } from './Title.interface'

export default {
  title: 'Commons/Title',
  component: Title,
  args: {
    ableToEdit: true,
    showBorderHover: true,
    fontWeight: 'bold',
    fontSize: '12px',
    tooltip: 'TÍtulo de la entidad',
    entityId: '12345',
    changeTitle: () => {
      // default function
    },
    clickTitle: () => {
      // default function
    },
    content: 'Títutlo de la entidad',
  },
  argTypes: {
    ableToEdit: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    showBorderHover: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta

const Template: Story<TitleProps> = args => <Title {...args} />

export const TITLE = Template.bind({})

TITLE.storyName = 'Title'
