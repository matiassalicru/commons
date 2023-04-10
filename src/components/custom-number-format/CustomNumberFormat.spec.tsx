import { render } from '@testing-library/react'
import { CustomNumberFormat } from './CustomNumberFormat'

const setup = (mock = {}) =>
  render(
    <CustomNumberFormat
      label="Custom Number Format"
      name="custom-number-format"
      value={1242}
      onChangeValue={jest.fn()}
      {...mock}
    />
  )

describe('<CustomNumberFormat />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
