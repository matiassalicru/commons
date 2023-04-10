import { render } from '@testing-library/react'
import { ChargedHour } from './ChargedHour'

const setup = (mock = {}) =>
  render(
    <ChargedHour
      hourLoad={0}
      minuteLoad={0}
      enabledDay={false}
      handleDeleteHour={() => null}
      handleClickCheckHour={() => null}
      enableEditHour={false}
      enableDeleteHour={false}
      size={0}
      iconSize={0}
      fontSize={0}
      space={0}
      mode="charged"
      onStartEdition={() => null}
      onCloseEdition={() => null}
      swapCss={false}
      {...mock}
    />
  )

describe('<ChargedHour />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })
})
