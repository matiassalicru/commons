import { render } from '@testing-library/react'
import { TransactionsSkeleton } from './TransactionsSkeleton'

const setup = mock => render(<TransactionsSkeleton {...mock} />)

describe('<TransactionsSkeleton />', () => {
  test('Should be in the document for an outcome item', () => {
    const { container } = setup({ quantity: 1, type: 'outcome', isSubitem: false })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document for two outcome subitem', () => {
    const { container } = setup({ quantity: 2, type: 'outcome', isSubitem: true })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document for three income item', () => {
    const { container } = setup({ quantity: 3, type: 'income', isSubitem: false })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document for four income subitem', () => {
    const { container } = setup({ quantity: 4, type: 'income', isSubitem: true })

    expect(container).toBeInTheDocument()
  })
})
