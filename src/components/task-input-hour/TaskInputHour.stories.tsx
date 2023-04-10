import { Story, Meta } from '@storybook/react'
import { StatusType, taskInputHourProps } from './TaskInputHour.interface'
// UI Components
import { TaskInputHour } from './index'

const wording = {
  buttonEdit: 'Edit',
  buttonAccept: 'Accept',
  buttonDecline: 'Decline',
  buttonDelete: 'Delete',
}

export default {
  title: 'Commons/TaskInputHour',
  component: TaskInputHour,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: StatusType,
      },
    },
    enabledComments: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    iconCommentsEnabled: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta

const Template: Story<taskInputHourProps> = args => {
  return (
    <div style={{ width: '810px', marginTop: '100px' }}>
      <TaskInputHour {...args} />
    </div>
  )
}

export const TASKINPUT = Template.bind({})

TASKINPUT.storyName = 'Task Input Hour'

TASKINPUT.args = {
  hourLoad: 0,
  minuteLoad: 0,
  sgHourLoad: 0,
  sgMinuteLoad: 0,
  handleDeleteHour: () => null,
  handleClickCheckHour: () => null,
  sgHandleDeleteHour: () => null,
  sgHandleClickCheckHour: () => null,
  onClickTask: () => null,
  onClickTaskRow: () => null,
  onClickComment: () => null,
  isProgressBar: false,
  hasComments: false,
  commentsId: '1',
  tooltipButtonComments: 'Tooltip Button',
  showCommentsIcon: false,
  status: StatusType.nueva,
  gap: 20,
  brandName: '',
  clientName: 'storybook',
  projectName: 'component',
  taskName: 'StoryBookTask',
  withoutClientText: 'Without client',
  withoutProjectText: 'Without project',
  taskId: '123',
  customPointer: 'pointer',
  showHoursInput: true,
  enableEditHour: true,
  enableDeleteHour: true,
  iconCommentsEnabled: true,
  wordings: { ...wording },
}
