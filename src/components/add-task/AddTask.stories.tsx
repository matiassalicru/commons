import { Story, Meta } from '@storybook/react'

// UI Components
import { AddTask } from './AddTask'

// Mocks
import { GET_PROJECT_MOCK } from './mocks'

export default {
  title: 'Commons/AddTask',
  component: AddTask,
  args: {
    trackEvent: params => console.info(`Event tracked: ${params}`),
    onSubmit: (taskName, projectId) => console.info(`Submit data: ${taskName} ${projectId}`),
    handleMaxLengthInputError: () => console.info('Error feedback'),
    getProjects: GET_PROJECT_MOCK,
    createWithoutProject: false,
  },
  argTypes: {},
} as Meta

const Template: Story = args => <AddTask {...args} />

export const ADD_TASK = Template.bind({})

ADD_TASK.storyName = 'AddTask'
