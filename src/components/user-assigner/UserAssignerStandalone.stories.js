import React, { useState } from 'react'
// UI Components
import { UserAssignerStandalone } from './UserAssignerStandalone'

const mockUsers = total =>
  new Array(10).fill().map((e, i) => ({
    id: i,
    firstName: `Jhon`,
    lastName: `COR ${i}`,
    email: `john@cor.com`,
  }))

const fetchUsers = () => Promise.resolve({ users: { data: mockUsers(10) } })

export default {
  title: 'Commons/UserAssignerStandalone',
  component: UserAssignerStandalone,
  args: {
    users: {
      users: {
        data: mockUsers(10),
        page: 1,
        lastPage: 1,
      },
    },
    onlyView: false,
    fetchUsers,
    contentId: '#modal-target',
    selected: [],
    show: true,
  },
  argTypes: {},
}

const Template = args => {
  const [show, setShow] = useState(false)
  const openModal = () => setShow(true)
  const customArgs = { ...args, show, setShow }
  return (
    <div style={{ margin: '100px', display: 'flex', gap: '15px' }}>
      <button type="button" onClick={openModal}>
        Open modal
      </button>
      {show && <UserAssignerStandalone {...customArgs} />}
      <div id="modal-target" />
    </div>
  )
}

export const USER_ASSIGNER = Template.bind({})

USER_ASSIGNER.storyName = 'User assigner standalone'
