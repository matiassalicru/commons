import { Story, Meta } from '@storybook/react'
import { BreadCrumbProps } from './BreadCrumb.interface'
// UI Components
import { BreadCrumb } from './index'

export default {
  title: 'Commons/BreadCrumb',
  component: BreadCrumb,
} as Meta

const Template: Story<BreadCrumbProps> = args => <BreadCrumb {...args} />

export const BREADCRUMB = Template.bind({})

BREADCRUMB.storyName = 'Breadcrumb'

BREADCRUMB.args = {
  brandName: '',
  clientName: 'storybook',
  projectName: 'component',
  theme: 'light',
}
