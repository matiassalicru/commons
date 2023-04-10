import { fireEvent, render, waitFor } from '@testing-library/react'
import { SuggestionButton } from './SuggestionButton'
import { positionProps } from './SuggestionButton.interface'

const setup = (mock = {}) =>
  render(
    <SuggestionButton
      size={0}
      noAnimation={false}
      grayLogo={false}
      onTooltipOpen={() => null}
      onTooltipClose={() => null}
      onClick={() => null}
      {...mock}
    >
      <div style={{ height: '50px' }} />
      <input type="buttom" style={{ width: '200px' }} />
    </SuggestionButton>
  )

describe('<SuggestionButton />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Did trigger onClick function', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      onClick: onClickMock,
      enable: true,
    })

    // Component wrapper
    const wrapper = getByTestId('SuggestionButtonWrapper')
    // Event
    fireEvent.click(wrapper)
    expect(onClickMock).toHaveBeenCalled()
  })

  test('Did trigger onHover function', async () => {
    const onHoverMock = jest.fn()
    const onTooltipOpenMock = jest.fn()
    const onTooltipCloseMock = jest.fn()
    const { getByTestId } = setup({
      onHover: onHoverMock,
      onTooltipOpen: onTooltipOpenMock,
      onTooltipClose: onTooltipCloseMock,
      enable: true,
    })

    // Component wrapper
    const wrapper = getByTestId('SCSuggestionButton')
    // Event
    fireEvent.mouseOver(wrapper)

    expect(onHoverMock).toHaveBeenCalled()
    waitFor(() => expect(onTooltipOpenMock).toHaveBeenCalled())

    fireEvent.mouseLeave(wrapper)
    waitFor(() => expect(onTooltipCloseMock).toHaveBeenCalled())
  })

  test('Should be displayed on the top right', async () => {
    const { getByTestId } = setup({
      enable: true,
      position: positionProps.rightUp,
      noAnimation: false,
    })

    // Component wrapper
    const wrapper = await getByTestId('SuggestionButtonWrapper')
    // Styles for the button
    const style = `
      left: 85%;
      z-index: 20;
      position: relative;
      margin-bottom: -19px;
    `
    expect(wrapper).toHaveStyle(style)
  })
})
