import { fireEvent, render, waitFor } from '@testing-library/react'

// UI Component
import ProjectSearch from '.'

const setup = (mock = {}) => render(<ProjectSearch getProjects={jest.fn()} {...mock} />)

describe('<ProjectSearch />', () => {
  test('Should render correctly', () => {
    const { container } = setup()
    const search = container.querySelector('[data-robot-id="addTask-searchProject-dropdown"]')

    expect(search).toBeInTheDocument()
  })
  test('Should call getProjects when search is clicked', () => {
    const getProjectsMock = jest.fn()
    const { container } = setup({
      getProjects: getProjectsMock,
    })
    const search = container.querySelector('[data-robot-id="addTask-searchProject-dropdown"]') as HTMLElement

    search && fireEvent.click(search)

    waitFor(() => {
      expect(getProjectsMock).toHaveBeenCalled()
    })
  })
})
