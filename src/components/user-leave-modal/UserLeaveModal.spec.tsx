import { fireEvent, render } from '@testing-library/react'
import { UserLeaveModalProps } from './UserLeaveModal.interface'
import { UserLeaveModal } from './UserLeaveModal'

const MOCK = {
  title: 'Test Modal Leaves',
  textContent: 'Text modal leaves',
  clickButtonCancel: jest.fn(),
  clickButtonAccept: jest.fn(),
  titleAccept: 'Confirm',
  titleCancel: 'Cancel',
  handleChangeCheck: jest.fn(),
  checkValue: false,
  labelCheckbox: 'Label for checkbox',
}

const Setup = ({ ...props }: UserLeaveModalProps) => <UserLeaveModal {...props} />

describe('<UserLeaveModal />', () => {
  beforeAll(() => {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'modals-portal')
    document.body.appendChild(newDiv)
  })

  test('should render UserLeaveModal', () => {
    const { container } = render(<Setup {...MOCK} />)
    expect(container).toBeInTheDocument()
  })

  test('should button Accept to be in the document', () => {
    const { getByText } = render(<Setup {...MOCK} />)
    const button = getByText(MOCK.titleAccept)

    expect(button).toBeInTheDocument()
  })

  test('should button Cancel to be in the document', () => {
    const { getByText } = render(<Setup {...MOCK} />)
    const button = getByText(MOCK.titleCancel)

    expect(button).toBeInTheDocument()
  })

  test('should call the function when the Accept button is clicked', () => {
    const { getByText } = render(<Setup {...MOCK} />)
    const button = getByText(MOCK.titleAccept)
    fireEvent.click(button)
    expect(MOCK.clickButtonAccept).toHaveBeenCalled()
  })

  test('should call the function when the Cancel button is clicked', () => {
    const { getByText } = render(<Setup {...MOCK} />)
    const button = getByText(MOCK.titleCancel)
    fireEvent.click(button)
    expect(MOCK.clickButtonCancel).toHaveBeenCalled()
  })

  test('should checkbox to be in the document', () => {
    const { getByTestId } = render(<Setup {...MOCK} />)
    const button = getByTestId('cor-checkbox')

    expect(button).toBeInTheDocument()
  })
})
