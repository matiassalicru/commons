import { render } from '@testing-library/react'
import { IconTypeFile } from './IconTypeFile'

const setup = (mock = {}) => render(<IconTypeFile fileType="" {...mock} />)

describe('<IconTypeFile />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with different fileType', () => {
    const fileTypes = ['doc', 'xls', 'txt', 'html', 'file', 'ppt', 'pdf', 'googleDrive', 'jpg']

    fileTypes.forEach(type => {
      const { container } = setup({
        fileType: type,
      })

      expect(container).toBeInTheDocument()
    })
  })
})
