export interface ItemsProps {
  label: string
  icon: string
  action: () => void
  show: boolean
}

export interface ShortcutButtonProps {
  items: ItemsProps[]
}
