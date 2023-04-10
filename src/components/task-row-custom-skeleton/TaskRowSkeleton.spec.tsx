import { render } from '@testing-library/react'

// Components
import { TaskRowSkeleton } from './TaskRowSkeleton'

// Utils
import {
  TITLE_COLUMN,
  MESSAGES_COLUMN,
  PRIORITY_COLUMN,
  DEADLINE_COLUMN,
  PROGRESS_COLUMN,
  PM_COLUMN,
  COLLABORATOR_COLUMN,
  ACTIONS_COLUMN,
  defaultColumns,
} from './utils/constants'

const mockProps = {
  quantity: 1,
  hasCheckBox: true,
  isLargeTask: true,
  columns: defaultColumns,
}

const setup = (mock = mockProps) => render(<TaskRowSkeleton {...mock} />)

describe('<TaskSkeleton />', () => {
  test('Should show all the columns', () => {
    const { getByTestId } = setup()

    defaultColumns.forEach(column => {
      const columna = getByTestId(`${column}-skeleton`)
      expect(columna).toBeInTheDocument()
    })
  })

  test('Should not show the checkbox column', () => {
    const { queryByTestId } = setup({ ...mockProps, hasCheckBox: false })

    const columna = queryByTestId('check-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the title column', () => {
    const customColumns = defaultColumns.filter(column => column !== TITLE_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('title-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the messages column', () => {
    const customColumns = defaultColumns.filter(column => column !== MESSAGES_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('messages-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the priority column', () => {
    const customColumns = defaultColumns.filter(column => column !== PRIORITY_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('priority-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the deadline column', () => {
    const customColumns = defaultColumns.filter(column => column !== DEADLINE_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('deadline-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the progress column', () => {
    const customColumns = defaultColumns.filter(column => column !== PROGRESS_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('progress-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the pm column', () => {
    const customColumns = defaultColumns.filter(column => column !== PM_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('pm-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the collaborator column', () => {
    const customColumns = defaultColumns.filter(column => column !== COLLABORATOR_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('collaborator-skeleton')
    expect(columna).toBeNull()
  })

  test('Should not show the actions column', () => {
    const customColumns = defaultColumns.filter(column => column !== ACTIONS_COLUMN)
    const { queryByTestId } = setup({ ...mockProps, columns: customColumns })

    const columna = queryByTestId('actions-skeleton')
    expect(columna).toBeNull()
  })
})
