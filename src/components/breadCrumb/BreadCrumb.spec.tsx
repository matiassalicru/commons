import { render } from '@testing-library/react'

// UI Component
import { BreadCrumb } from '.'

const setup = (mock = {}) => render(<BreadCrumb {...mock} />)

describe('<BreadCrumb />', () => {
  test('Should render correctly', () => {
    const { getByText } = setup({
      clientName: 'dummy client',
      projectName: 'dummy project',
    })

    const client = getByText('dummy client')
    const project = getByText('dummy project')

    expect(client).toBeInTheDocument()
    expect(project).toBeInTheDocument()
  })

  test('Should render without client', () => {
    const { getByText } = setup({
      brandName: 'dummy brand',
      projectName: 'dummy project',
      theme: 'default',
      withoutClientText: 'no client',
    })

    const brand = getByText('dummy brand')
    const withoutClient = getByText('no client')
    const project = getByText('dummy project')

    expect(brand).toBeInTheDocument()
    expect(withoutClient).toBeInTheDocument()
    expect(project).toBeInTheDocument()
  })

  test('Should render without project', () => {
    const { getByText } = setup({
      brandName: 'dummy brand',
      theme: 'default',
      withoutProjectText: 'no project',
    })

    const brand = getByText('dummy brand')
    const withoutProject = getByText('no project')

    expect(brand).toBeInTheDocument()
    expect(withoutProject).toBeInTheDocument()
  })
})
