import gql from 'graphql-tag'

const USER_FIELDS = `
  id
  firstName
  lastName
  picture
  remainingHours
  roleId
`

export const SEARCH_USERS_QUERY = gql`
  query users($filters: String, $page: Int) {
    users(filters: $filters, page: $page) {
      total
      perPage
      page
      lastPage

      data {
        ${USER_FIELDS}
      }
    }
  }
`

export const ASSIGN_USER_MUTATION = gql`
    mutation taskAssign($taskId: ID, $type: TaskAssignType, $userIds: [ID]) {
        taskAssign(taskId: $taskId, type: $type, userIds: $userIds) {
            userIds
        }
    }
`

export const GET_PERMISSION_USER = gql`
    query checkTaskAccessType($userId: ID) {
        checkTaskAccessType(userId: $userId) {
            status
        }
    }
`
