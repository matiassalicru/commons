import { Story, Meta } from '@storybook/react'

// UI Components
import { TaskRow, TableWrapper } from './index'

export default {
  title: 'Commons/TaskRow',
  component: TaskRow,
} as unknown as Meta

const COLUMNS = {
  status: {
    name: 'status',
    width: '13px ',
  },
  title: {
    name: 'title',
    width: 'minmax(80px,1fr) ',
  },
  messages: {
    name: 'messages',
    width: '80px',
  },
  priority: {
    name: 'priority',
    width: '80px',
  },
  deadline: {
    name: 'deadline',
    width: '125px',
  },
  progress: {
    name: 'progress',
    width: '90px',
  },
  pm: {
    name: 'pm',
    width: '70px',
  },
  collaborator: {
    name: 'collaborator',
    width: '90px',
  },
  actions: {
    name: 'actions',
    width: '120px',
  },
}

const Template: Story = args => {
  const { columns, isLargeTask } = args
  return (
    <TableWrapper columns={columns} columnsConfig={COLUMNS} isLargeTask={isLargeTask}>
      <TaskRow {...args} />
    </TableWrapper>
  )
}

export const TASKROW = Template.bind({})

TASKROW.storyName = 'Task Row'

TASKROW.args = {
  afterUpdate: () => true,
  columns: ['status', 'title', 'messages', 'priority', 'deadline', 'progress', 'pm', 'collaborator', 'actions'],
  dataCounter: {},
  getLinks: () => true,
  getSubTasks: () => true,
  handleClickChargeHours: () => true,
  handleOpenUserAssigner: () => true,
  handleShowError: () => true,
  handleUpdateTask: () => true,
  hasBreadcrumb: false,
  isCollapsed: false,
  showSubtaskIcon: false,
  isCollapsibleButtonVisible: false,
  isDirectFatherRendered: false,
  isLargeTask: false,
  isLastElement: false,
  openTaskPanel: () => true,
  originSection: 'default',
  user: {
    info: {},
    permissions: {
      tasks: {
        edit: true,
      },
    },
  },
  project: {},
  renderTask: {
    _id: '1515490',
    title: 'Tarea generic',
    childQ: null,
    status: 'estancada',
    taskRoot: 0,
    priority: '1',
    progress: 0,
    archived: false,
    deadline: null,
    datetime: '2022-01-27 00:00:00',
    estimated: '600',
    orderTasks: '1515490/',
    deliverable: 0,
    hourCharged: 0,
    estimatedDistribution: false,
    counterGroup: {
      messages: 0,
    },
    pm: {
      id: 1,
      roleId: null,
      picture: '',
      lastName: 'Scott',
      firstName: 'Michael',
      remainingHours: 100,
    },
    collaborators: [],
    project: {
      id: '2',
      name: 'Dunder Mifflin',
      brand: { name: 'Nombre de la marca' },
      product: { name: 'Nombre del producto' },
      client: { name: 'Nombre del cliente' },
    },
    father: {
      id: 123,
      title: 'Nombre de la tarea madre',
    },
    unreadMessages: 0,
    brothers: [
      {
        level: 1,
        hasBrother: false,
      },
    ],
  },
}
