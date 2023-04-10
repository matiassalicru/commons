import { Story, Meta } from '@storybook/react'
// UI Components
import { TitleMaker } from './index'
import { TitleMakerProps } from './TitleMaker.interface'

export default {
  title: 'Commons/TitleMaker',
  component: TitleMaker,
  args: {
    textSize: 12,
    textColor: '#5A5A5A',
    text: 'Title text',
    textVariant: 'uppercase',
    textDisplay: 'block',
    textMargin: '0 0 0 0',
    textWeight: 500,
    textCursor: 'default',
    letterSpacing: '1',
  },
  argTypes: {
    textVariant: {
      control: {
        type: 'select',
        options: ['uppercase', 'capitalize', 'lowercase', 'none'],
      },
    },
    textCursor: {
      control: {
        type: 'select',
        options: ['pointer', 'default'],
      },
    },
    textDisplay: {
      control: {
        type: 'select',
        options: ['block', 'inline-block'],
      },
    },
    textWeight: {
      control: {
        type: 'select',
        options: ['300', '400', '500'],
      },
    },
    textColor: { control: 'color' },
  },
} as Meta

const Template: Story<TitleMakerProps> = args => <TitleMaker {...args} />

export const BASE_TITLE = Template.bind({})
BASE_TITLE.storyName = 'Base title'
