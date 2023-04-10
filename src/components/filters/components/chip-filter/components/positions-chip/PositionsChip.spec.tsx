import { render } from '@testing-library/react'

import { PositionsChip } from './PositionsChip'

const setup = (mock = {}) => render(<PositionsChip data={[]} {...mock} />)

describe('<PositionsChip />', () => {
  test('Should have two childs render inside first child', () => {
    const { container } = setup({
      data: [
        {
          id: 1,
          name: 'Lorem',
          categoryName: 'Ipsum',
        },
        {
          id: 2,
          name: 'Lorem Sr',
          categoryName: 'Ipsum',
        },
      ],
    })

    expect(container.childElementCount).toBe(1)
    expect(container?.firstChild?.childElementCount as HTMLElement).toBe(2)
  })

  test('First child should not have childrens rendered', () => {
    const { container } = setup()

    expect(container.firstChild?.childElementCount as HTMLElement).toBe(0)
  })
})
