import { checkDeadlinePermissions } from './permissions'

describe('disableDatePicker', () => {
  it('It should return "true" if the user has permissions to edit', () => {
    const permissionsEditDeadline = true
    const permissionsCreateDeadline = false
    const deadlineValue = null
    const result = checkDeadlinePermissions(permissionsEditDeadline, permissionsCreateDeadline, deadlineValue)
    expect(typeof result).toEqual('boolean')
    expect(result).toBeTruthy()
  })
  it('It should return "false" if the user has permissions to create', () => {
    const permissionsEditDeadline = false
    const permissionsCreateDeadline = true
    const deadlineValue = null
    const result = checkDeadlinePermissions(permissionsEditDeadline, permissionsCreateDeadline, deadlineValue)
    expect(typeof result).toEqual('boolean')
    expect(result).toBe(false)
  })
  it('It should return "true" if the user has permissions to create but deadlineValue has value', () => {
    const permissionsEditDeadline = false
    const permissionsCreateDeadline = true
    const deadlineValue = 'test'
    const result = checkDeadlinePermissions(permissionsEditDeadline, permissionsCreateDeadline, deadlineValue)
    expect(typeof result).toEqual('boolean')
    expect(result).toBeTruthy()
  })
  it('It should return "true" if the user has permissions to create, permission to edit and deadline value', () => {
    const permissionsEditDeadline = true
    const permissionsCreateDeadline = true
    const deadlineValue = 'test'
    const result = checkDeadlinePermissions(permissionsEditDeadline, permissionsCreateDeadline, deadlineValue)
    expect(typeof result).toEqual('boolean')
    expect(result).toBe(false)
  })
})
