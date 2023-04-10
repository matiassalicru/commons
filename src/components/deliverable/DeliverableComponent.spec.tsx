import { render, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'

import * as stories from './Deliverable.stories'

const {
  DELIVERABLE_BIG_STATUS_COUNTER,
  DELIVERABLE_BIG_STATUS_CHILDREN,
  DELIVERABLE_SIMPLE_STATUS_COUNTER,
  DELIVERABLE_SIMPLE_STATUS_CHILDREN,
} = composeStories(stories)

const toRender = {
  bigCounter: <DELIVERABLE_BIG_STATUS_COUNTER />,
  bigChildren: <DELIVERABLE_BIG_STATUS_CHILDREN />,
  simpleCounter: <DELIVERABLE_SIMPLE_STATUS_COUNTER />,
  simpleChildren: <DELIVERABLE_SIMPLE_STATUS_CHILDREN />,
}

const setup = (version = 'default') => {
  const component = render(toRender[version])
  const input = component.queryByLabelText('deliverableInput') as HTMLInputElement
  return {
    input,
    component,
  }
}

// Testing big version.
test('bigVersion :: should have elements', () => {
  const { component } = setup('bigCounter')
  expect(component.getByText(/DELIVERABLE/i)).not.toBeNull()
  expect(component.queryByTestId('check')).toBeNull()
  expect(component.queryByTestId('times')).toBeNull()
})

test('bigVersion :: should change the input value', () => {
  const { input } = setup('bigCounter')
  if (input) fireEvent.change(input, { target: { value: '3' } })
  expect(input?.value).toBe('3')
})

test('bigVersion :: should allow only numeric value', () => {
  const { input } = setup('bigCounter')
  expect(input.value).toBe('1') // default value
  fireEvent.change(input, { target: { value: 'testing' } })
  expect(input.value).toBe('1')
})

test('bigVersion :: should change value buttom accept and cancel will show', () => {
  const { input, component } = setup('bigCounter')
  fireEvent.change(input, { target: { value: '3' } })
  expect(input.value).toBe('3')
  expect(component.getByTestId('check')).not.toBeNull()
  expect(component.getByTestId('times')).not.toBeNull()
})

test('bigVersion :: should change input value and accept change the value', () => {
  const { input, component } = setup('bigCounter')
  fireEvent.change(input, { target: { value: '3' } })
  expect(input.value).toBe('3')
  const acceptButton = component.getByTestId('check')
  fireEvent.click(acceptButton)
  expect(input.value).toBe('3')
})

test('bigVersion :: should change input value and cancel persist the value', () => {
  const { input, component } = setup('bigCounter')
  fireEvent.change(input, { target: { value: '3' } })
  expect(input.value).toBe('3')
  const cancelButton = component.getByTestId('times')
  fireEvent.click(cancelButton)
  expect(input.value).toBe('1')
})

test('bigVersion :: should try to add more than 3 digit number', () => {
  const { input } = setup('bigCounter')
  userEvent.type(input, '1234')
  expect(input.maxLength).toBe(3)
  expect(input.value).toBe('234')
})

test('bigVersion :: should try to add more than 3 digit number when ENTER button is clicked', () => {
  const { input } = setup('bigCounter')

  userEvent.type(input, '1234')
  fireEvent.keyDown(input, {
    key: 'Enter',
  })

  expect(input.maxLength).toBe(3)
  expect(input.value).toBe('234')
})

test('bigVersion :: should call handleCancel when ESCAPE button is clicked', () => {
  const { input } = setup('bigCounter')

  userEvent.type(input, '1234')
  fireEvent.keyDown(input, {
    key: 'Escape',
  })

  expect(input.maxLength).toBe(3)
  expect(input.value).toBe('1')
})

// Testing small version.
test('simpleCounter :: should match snapshot', () => {
  const { component } = setup('simpleCounter')
  expect(component.baseElement).toBeInTheDocument()
})

test('simpleChildren :: should match snapshot', () => {
  const { component } = setup('simpleChildren')
  expect(component.baseElement).toBeInTheDocument()
})
