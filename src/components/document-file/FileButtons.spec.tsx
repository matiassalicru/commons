import { fireEvent, render } from '@testing-library/react'
import { FileButtons } from './FileButtons'

const setup = (mock = {}) => render(<FileButtons url="http://url.com/mock" source="S3" file_type="pdf" {...mock} />)

describe('<FileButtons />', () => {
  test('Should be in the document', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with full variant', () => {
    const { container } = setup({
      variant: 'full',
      file: {
        file_type: 'pdf',
        url: 'http://url.com/mock',
        source: 'S3',
      },
    })
    expect(container).toBeInTheDocument()
  })

  test('Should be in the document', () => {
    const handleClickMock = jest.fn()
    const { getAllByTestId } = setup({
      handleClick: handleClickMock,
    })
    const deleteButton = getAllByTestId('times')[2]

    fireEvent.click(deleteButton)

    expect(handleClickMock).toHaveBeenCalled()
  })
})
