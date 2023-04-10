import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { SCButtons } from './style'
// Global UI Components
import { ButtonIconCustom } from './../button-icon-custom'
// Constants
const PDF = 'pdf'
const SRC_S3 = 'S3'

/**
 * @param {*} file_type > extensión de archivo
 * @param {*} source > indica si el archivo fue subido desde un entorno local o externo *drive, dropbox, etc.*
 * @param {*} url
 * @param {*} handleClick > función para borrar elemento
 * @returns
 */
export const FileButtons = ({ file_type, source, url, handleClick }) => {

  /**
   * @returns devuelve un elemento con una etiqueta a y un boton
   */
  const customButton = (url, icon) => {
    return (
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <ButtonIconCustom
          icon={icon}
          background="#ffffff"
          color="#000000"
          onHoverBorder="#000000"
          borderColor="#A4ADB5"
          borderSize={1}
        />
      </a>
    )
  }

  /**
   * @returns un array de botones respecto de el tipo de archivo recibido y de la fuente de donde se recibió
   */
  const createButtonArray = (fily_type, source, url) => {

    if (file_type === PDF && source === SRC_S3) {
      return [customButton(`${url}?show_inline=true`, 'eye'), customButton(url, 'download')]
    }
    if (file_type === PDF && source !== SRC_S3) {
      return [customButton(url, 'eye')]
    }
    if (file_type !== PDF) {
      return [customButton(url, 'download')]
    }

  }

  return (
    <SCButtons>
      {createButtonArray(file_type, source, url).map( button => <>{button}</> )}

      <ButtonIconCustom
        icon="trash-alt"
        background="#ffffff"
        color="#000000"
        onHoverBorder="#000000"
        borderColor="#A4ADB5"
        borderSize={1}
        onClikAction={handleClick}
      />
    </SCButtons>
  )
}

FileButtons.propTypes = {
  file_type: PropTypes.string,
  source: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}