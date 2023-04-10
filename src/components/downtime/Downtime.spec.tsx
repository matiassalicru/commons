import { render } from '@testing-library/react'
import { Downtime } from './Downtime'
import { DowntimeProps } from './Downtime.interface'

const setup = (
  mock: DowntimeProps = {
    illustration: 'Downtime',
    title: 'Ups!',
    primaryText: '',
    secondaryText: 'Mensaje de error',
    footer: 'Footer',
  }
) => render(<Downtime {...mock} />)

describe('<Downtime />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
