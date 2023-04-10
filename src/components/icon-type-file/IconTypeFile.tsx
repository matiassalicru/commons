import { ReactElement } from 'react'
// Global UI Component
import { SvgIcon } from '../svg-icon'
import { IconTypeFileProps } from './IconTypeFile.interface'
// Styles
import { SCWrapperIcon } from './style'

/**
 * Dependiendo de la extensión del archivo recibida, retorno un objeto con el
 * nombre del icono a utilizar y su correspondiente color.
 * @param {string} type - Extensión de el archivo.
 */
const getIconByType = type => {
  let icon = {
    iconName: '',
    circleColor: '',
  }

  const word = ['doc', 'docx']
  const excel = ['xls', 'xlsx']
  const docs = ['txt', '']
  const code = ['html', 'sql', 'php', 'asp', 'aspx', 'js']
  const ppt = ['ppt']
  const pdf = ['pdf']
  const drive = ['googleDrive']
  const img = ['jpg', 'jpeg', 'gif', 'png', 'svg', 'webp']

  switch (true) {
    case pdf.includes(type):
      icon = {
        iconName: 'file-pdf',
        circleColor: '#FEE8EB',
      }
      break
    case word.includes(type):
      icon = {
        iconName: 'file-word',
        circleColor: '#E3F3F9',
      }
      break
    case excel.includes(type):
      icon = {
        iconName: 'file-excel',
        circleColor: '#E1F9ED',
      }
      break
    case docs.includes(type):
      icon = {
        iconName: 'file',
        circleColor: '#f5f5f5',
      }
      break
    case code.includes(type):
      icon = {
        iconName: 'file-code',
        circleColor: '#f5f5f5',
      }
      break

    case ppt.includes(type):
      icon = {
        iconName: 'file-powerpoint',
        circleColor: '#FEE8EB',
      }
      break

    case drive.includes(type):
      icon = {
        iconName: 'google-drive',
        circleColor: '#f5f5f5',
      }

      break
    case img.includes(type):
      icon = {
        iconName: 'file-image',
        circleColor: '#E3F3F9',
      }

      break
    default:
      icon = {
        iconName: 'file',
        circleColor: '#f5f5f5',
      }
  }

  return icon
}

export function IconTypeFile({
  fileType = 'doc',
  color = '#000000',
  size = 30,
  fontSize = 16,
}: IconTypeFileProps): ReactElement {
  const { circleColor, iconName } = getIconByType(fileType)
  return (
    <SCWrapperIcon typeColor={circleColor} size={size} fontSize={fontSize} color={color}>
      <SvgIcon iconName={iconName} />
    </SCWrapperIcon>
  )
}
