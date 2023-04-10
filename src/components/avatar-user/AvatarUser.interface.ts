export enum AvatarSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  tiny = 'tiny',
  auto = 'auto',
}

export interface AvatarUserProps {
  picture: string // Path del source.
  firstName: string // Nombre del usuario para agragar al atributo alt.
  lastName: string // Apellido del usuario para agragar al atributo alt.
  size: AvatarSize // Variante de tamaño.
}

export interface SCAvatarProps {
  size: AvatarSize
  bgColor?: string
}
