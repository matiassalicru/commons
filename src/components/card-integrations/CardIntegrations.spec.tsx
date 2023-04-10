import { fireEvent, render } from '@testing-library/react'
import { Bell } from '@projectcor/icons/lib/components/Bell'
import { CardIntegrations } from './CardIntegrations'

const setup = (mock = {}) =>
  render(
    <CardIntegrations
      title="StoryBook Integration"
      description="Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation."
      type="google_calendar"
      isActive={false}
      onConnect={() => undefined}
      appLogo={<Bell />}
      isLoading={false}
      {...mock}
    />
  )

describe('<CardIntegrations>', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('should show a title', () => {
    const mockTitle = 'Test'
    const { queryByText } = setup({
      title: mockTitle,
    })

    const getTitle = queryByText(mockTitle)

    expect(getTitle).toBeInTheDocument()
    expect(getTitle).toHaveTextContent(mockTitle)
  })

  test('should show a description', () => {
    const mockDescription = 'This is a test'
    const { queryByText } = setup({
      description: mockDescription,
    })

    const description = queryByText(mockDescription)

    expect(description).toBeInTheDocument()
    expect(description).toHaveTextContent(mockDescription)
  })

  test('should fire onclick event on button', () => {
    const onClickMock = jest.fn()
    const { getByText } = setup({
      onConnect: onClickMock,
    })

    const button = getByText('connect')

    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalled()
  })

  test('should show info button', () => {
    const { getByTestId } = setup({
      infoButton: true,
    })

    const infoButton = getByTestId('infoButton')

    expect(infoButton).toBeInTheDocument()
  })

  test('should fire onclick event on info button', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      infoButton: true,
      handleClickInfoButton: onClickMock,
    })

    const button = getByTestId('infoButton')

    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalled()
  })
})
