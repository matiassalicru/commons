import { render, cleanup } from '@testing-library/react'
import * as ReactDropzone from 'react-dropzone'
import { Dropzone } from '.'

const setup = (mock = {}) =>
  render(
    <Dropzone border={false} fromFiles={false} textContent="" displayGrid={false} onDrop={jest.fn()} {...mock}>
      test
    </Dropzone>
  )

describe('<Dropzone />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with different variants', () => {
    const variants = [
      {
        isDragAccept: true,
        isDragReject: false,
        isDragActive: false,
        borderDefault: false,
      },
      {
        isDragAccept: false,
        isDragReject: true,
        isDragActive: false,
        borderDefault: false,
      },
      {
        isDragAccept: false,
        isDragReject: false,
        isDragActive: true,
        borderDefault: false,
      },
      {
        isDragAccept: false,
        isDragReject: false,
        isDragActive: false,
        borderDefault: true,
      },
    ]

    variants.forEach(variant => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn(ReactDropzone, 'useDropzone').mockImplementation(() => ({
        ...variant,
        getRootProps: f => f,
      }))

      const { container } = setup()

      expect(container).toBeInTheDocument()

      cleanup()
    })
  })

  test('Should be in the document within border', () => {
    const { container } = setup({
      border: false,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with fromFiles true prop', () => {
    const { getByText } = setup({
      fromFiles: true,
      textContent: 'dummy',
    })
    const text = getByText('dummy')

    expect(text).toBeInTheDocument()
  })
})
