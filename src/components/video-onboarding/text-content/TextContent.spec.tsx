import { render } from '@testing-library/react'
import { TextContent } from './TextContent'

const setup = (mock = {}) =>
  render(<TextContent title="Presupuestador Test" paragraph="Una prueba del presupuestador" {...mock} />)

test('TextContent component renders correctly', () => {
  const { getByText } = setup()
  const title = getByText('Presupuestador Test')
  const paragraph = getByText('Una prueba del presupuestador')
  expect(title).toBeInTheDocument()
  expect(paragraph).toBeInTheDocument()
})

const setupCollapsed = (mock = {}) =>
  render(
    <TextContent
      title="Presupuestador Test"
      paragraph="Una prueba del presupuestador"
      isCollapsed
      collapsedDescription="Descripción de la prueba"
      {...mock}
    />
  )

test('TextContent component renders correctly when isCollapsed, paragraph should not be seen', () => {
  const { getByText } = setupCollapsed()
  const title = getByText('Presupuestador Test')
  const collapsedDescription = getByText('Descripción de la prueba')
  expect(collapsedDescription).toBeInTheDocument()
  expect(title).toBeInTheDocument()
  expect(() => getByText('Una prueba del presupuestador')).toThrowError()
})
