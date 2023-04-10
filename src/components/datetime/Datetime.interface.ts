import React from 'react'

export interface DatetimeProps {
  // Idioma del usuario
  lang: string
  // Indica si se visualizará o no el icono
  icon: boolean
  // Label que tendrá el dateTimePicker
  label: string
  // Indica si el dateTimePicker está o no habilitado. false: está habilitado - true: no está habilitado
  disabled: boolean
  // Tooltip que tendrá el dateTimePicker
  tooltip?: string
  // Funcion para verificar si está vencida
  isExpired: boolean
  // Indica si se puede eliminar la fecha
  clearable: boolean
  // Indica si debe o no tener un label al no tener fecha
  emptyLabel: boolean
  // Fecha YYYY-MM-DD HH:mm:ss
  defaultDate: string
  // Formato de la fecha
  format: string
  // Callback a ejecutar cuando se cambia la fecha
  handleUpdate: (arg0) => void
  // Minimal selectable date
  minDate: string
  // It shows input error
  error?: boolean
  // Text to input error
  helperText?: string
  // traducciones
  translations: {
    ok?: React.ReactNode
    clear?: React.ReactNode
    today?: React.ReactNode
    cancel?: React.ReactNode
    addDate?: string
  }
}

export interface SCDatetimeProps {
  isExpired: boolean
}
