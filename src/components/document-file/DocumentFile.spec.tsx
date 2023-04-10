import { fireEvent, render } from '@testing-library/react'
import { DocumentFile } from './DocumentFile'

const setup = (mock = {}) =>
  render(
    <DocumentFile
      file={{
        id: 'dummy id',
        name: 'dummy name',
        size: 100,
        url: null,
        source: null,
        file_type: null,
      }}
      {...mock}
    />
  )

describe('<DocumentFile />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with small variant', () => {
    const { container } = setup({
      variant: 'small',
      file: {
        id: 'dummy id',
        name: 'dummy.jpg',
        size: 100,
        url: null,
        source: 'GoogleDrive',
      },
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document', () => {
    const onClickDeleteMock = jest.fn()
    const { getAllByTestId } = setup({
      onClickDelete: onClickDeleteMock,
    })
    const deleteButton = getAllByTestId('times')[1]

    fireEvent.click(deleteButton)

    expect(onClickDeleteMock).toHaveBeenCalled()
  })
})
