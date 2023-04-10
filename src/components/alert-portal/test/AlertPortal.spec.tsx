import { cleanup, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from '../AlertPortal.stories'
import { AlertPortalProps } from '../AltertPortal.interface'

const { ALERTPORTAL } = composeStories(stories)

const defaultProps = {
  position: 'center-bottom',
  text: 'AlertPortalText',
  variant: 'success',
  icon: '',
  timeOut: 3500,
  onClose: () => {
    // testing close default function
  },
  idPortal: 'root',
  withLink: {
    title: 'dummy text',
    route: '/',
  },
  spinner: false,
} as AlertPortalProps

const textVariant = {
  ...defaultProps,
  text: 'testing jest',
  variant: 'danger',
}
const positionRB = { ...defaultProps, text: 'testing right-bottom', position: 'right-bottom' }
const positionRT = { ...defaultProps, text: 'testing right-top', position: 'right-top' }

beforeAll(() => {
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'root')
  document.body.appendChild(newDiv)
})
beforeEach(cleanup)

const setup = props => {
  const component = render(<ALERTPORTAL {...defaultProps} {...props} />)
  const findText = props.text === '' ? (defaultProps.text as string) : props.text
  const textComponent = component.getByText(findText).textContent

  return {
    component,
    textComponent,
  }
}

test('renders Alert portal component', () => {
  const { textComponent } = setup(defaultProps)
  expect(textComponent).toBe('AlertPortalText')
})

test('renders Alert portal component with text', () => {
  const { textComponent } = setup(textVariant)
  expect(textComponent).toBe('testing jest')
})

test('renders Alert portal component with right bottom position', () => {
  const { textComponent } = setup(positionRB)
  expect(textComponent).toBe('testing right-bottom')
})

test('renders Alert portal component with right top position', () => {
  const { textComponent } = setup(positionRT)
  expect(textComponent).toBe('testing right-top')
})
