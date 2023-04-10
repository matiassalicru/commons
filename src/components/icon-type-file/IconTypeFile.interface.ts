export interface IconTypeFileProps {
  // La extensión del archivo que voy a representar. (Ej: txt, doc, xls, etc.)
  fileType: string
  // Color para aplicar el icono.
  color?: string
  // Tamaño el alto y ancho para aplicar a el circulo que envuelva al icono.
  size?: number
  // Tamaño de fuente del icono.
  fontSize?: number
}

// Style Components Props
export interface SCIconTypeFileProps {
  size?: number
  typeColor?: string
  fontSize?: number
}
