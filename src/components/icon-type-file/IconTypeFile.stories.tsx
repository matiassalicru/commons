import { Story, Meta } from '@storybook/react'
import { IconTypeFileProps } from './IconTypeFile.interface'
// UI Components
import { IconTypeFile } from './index'

export default {
  title: 'Commons/Icons file',
  component: IconTypeFile,
  args: {
    fileType: 'doc',
    color: '#000000',
    size: 30,
    fontSize: 16,
  },
  argTypes: {
    fileType: {
      control: {
        type: 'select',
        options: ['doc', 'pdf', 'xls', 'ppt', 'txt', 'sql', 'google-drive'],
      },
    },
    color: { control: 'color' },
  },
} as Meta

const TemplateAll: Story<IconTypeFileProps> = args => (
  <div style={{ display: 'flex', gap: '15px' }}>
    <IconTypeFile {...args} fileType="doc" />
    <IconTypeFile {...args} fileType="pdf" />
    <IconTypeFile {...args} fileType="xls" />
    <IconTypeFile {...args} fileType="ppt" />
    <IconTypeFile {...args} fileType="txt" />
    <IconTypeFile {...args} fileType="sql" />
  </div>
)

const Template: Story<IconTypeFileProps> = args => <IconTypeFile {...args} />

export const ALL_ICONS = TemplateAll.bind({})
ALL_ICONS.storyName = 'All icons'

export const SIMPLE_ICON = Template.bind({})
SIMPLE_ICON.storyName = 'Simple icon'
