import { ReactElement } from 'react'
import { useDropzone } from 'react-dropzone'
import { DropzoneProps } from './Dropzone.interface'
// Styles
import { SCDropzone, SCWrapperText, SCText } from './style'

export function Dropzone({
  children,
  onDrop,
  border = true,
  fromFiles = false,
  textContent = 'dropzone_files',
  displayGrid = true,
}: DropzoneProps): ReactElement {
  /**
   * Dropzone config
   */
  const { getRootProps, isDragActive, isDragReject, isDragAccept } = useDropzone({
    noClick: true,
    disabled: false,
    multiple: true,
    maxSize: 1000000000,
    onDrop,
  })

  return (
    <SCDropzone
      {...getRootProps({ isDragActive, isDragReject, isDragAccept })}
      borderDefault={border}
      fromFiles={fromFiles}
      displayGrid={displayGrid}
    >
      {children}
      {fromFiles && (
        <SCWrapperText isDragActive={isDragActive}>
          <SCText>{textContent}</SCText>
        </SCWrapperText>
      )}
    </SCDropzone>
  )
}
