import { Story, Meta } from '@storybook/react'
// UI Components
import { BulkActions } from './BulkActions'
// Interface
import { BulkActionsType } from './BulkActions.interface'
// Mocks
import { bulkActions } from '../../mocks/bulkActions'

const userEntity = {
  id: 123,
  lang: 'es',
  lastName: 'Baca',
  firstName: 'Angelica',
  remainingHours: null,
}

const mockUsers = () =>
  new Array(10).fill().map((e, i) => ({
    id: i,
    firstName: `Jhon`,
    lastName: `COR ${i}`,
    email: `john@cor.com`,
  }))

const fetchUsers = () => Promise.resolve({ users: { data: mockUsers(10) } })

const trackEvent = params => {
  console.info('Track event: ', { ...params })
}

export default {
  title: 'Commons/BulkActions',
  component: BulkActions,
  args: {
    bulkActions,
    trackEvent,
    users: {
      users: {
        data: mockUsers(),
        page: 1,
        lastPage: 1,
      },
    },
    selectedItems: 3,
    myData: userEntity,
    modalElementId: '#root',
    handleFetcher: fetchUsers,
    handleCloseWidget: () => true,
    handleSelectValues: () => true,
  },
  argTypes: {},
} as Meta

const Template: Story<BulkActionsType> = args => <BulkActions {...args} />

export const BULK_ACTIONS = Template.bind({})

BULK_ACTIONS.storyName = 'BulkActions'
