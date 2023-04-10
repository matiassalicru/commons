import React from "react";
// UI Components
import { UserAssigner } from "./UserAssigner";
const mockUsers = total => new Array(10).fill()
  .map((e, i) => ({
    id: i,
    firstName: `Jhon`,
    lastName: `COR ${i}`,
    email: `john@cor.com`,
}))

const fetchUsers = () => Promise.resolve({ users: { data: mockUsers(10) }  })

export default {
  title: "Commons/UserAssigner",
  component: UserAssigner,
  args: {
    users: {
      users: {
        data: mockUsers(10),
        page: 1,
        lastPage: 1,
      }
    },
    onlyView: false,
    fetchUsers,
    contentId: "#modal-target",
    selected: []
  },
  argTypes: {
  },
};

const Template = (args) => (
  <div style={{ 'margin': '100px', display: "flex", gap: "15px" }}>
    <UserAssigner {...args} />
    <div id='modal-target'></div>
  </div>
);

export const USER_ASSIGNER = Template.bind({});

USER_ASSIGNER.storyName = "User assigner";
