import { render, cleanup, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from '../BarProgress.stories'

afterEach(() => {
  cleanup()
})

const hexToRgb = hex =>
  hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))

const { BARPROGRESS } = composeStories(stories)

const defaultProps = {
  progress: 0,
  colorPrimaryBar: '#333333',
  height: 5,
  borderRadius: 50,
  colorBaseBar: '#ededed',
}

const changeColorProps = {
  ...defaultProps,
  colorBaseBar: '#FFDDFF',
}

const changeColorAndWidthProps = {
  ...defaultProps,
  colorPrimaryBar: '#FFDDFF',
  progress: 30,
}

const heighRadiousStyleTest = (height, radius) => `
  height: ${height}px;
  border-radius: ${radius}px;
`
const backgroundStyleTest = color => `
  background: ${color};
`

const setup = (props = defaultProps) => {
  const component = render(<BARPROGRESS {...props} />)
  const parentDiv = component.getByTestId('BarWrapper')
  return {
    component,
    parentDiv,
  }
}

test('renders Bar Progress component', () => {
  const { parentDiv } = setup()
  expect(parentDiv).toHaveStyle(heighRadiousStyleTest(5, 50))
})

test('renders Bar Progress component with changed base color', () => {
  const { parentDiv } = setup(changeColorProps)
  parentDiv.querySelectorAll('div')[0].setAttribute('data-testid', 'BaseDiv')

  expect(screen.getByTestId('BaseDiv')).toHaveStyle(backgroundStyleTest('#FFDDFF'))
})

test('renders Bar Progress component with changed primary color and progress', () => {
  const { parentDiv } = setup(changeColorAndWidthProps)

  parentDiv.querySelectorAll('div')[1].setAttribute('data-testid', 'PrimaryDiv')

  const style = window.getComputedStyle(screen.getByTestId('PrimaryDiv'))

  expect(style.width).toBe('30%')
  expect(style.background).toBe(`rgb(${hexToRgb('#FFDDFF').join(', ')})`)
})
