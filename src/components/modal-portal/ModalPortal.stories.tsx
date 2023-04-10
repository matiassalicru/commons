import { Story, Meta } from '@storybook/react'
// UI Components
import { ModalPortal } from './ModalPortal'
import { ModalPortalProps } from './ModalPortal.interface'

const translations = {
  accept: 'Aceptar',
  cancel: 'Cancelar',
}

export default {
  title: 'Commons/ModalPortal',
  component: ModalPortal,
  args: {
    variant: 'danger',
    closeModal: () => {
      // default function
    },
    title: 'Modal titulo',
    elementId: '#root',
    translations,
    clickButtonAccept: () => {
      // default function
    },
    clickButtonCancel: () => {
      // default function
    },
    textContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    maxWidth: '600px',
    withMaxWidth: true,
    showAcceptButton: true,
    showCancelButton: true,
    showCloseButton: true,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['danger', 'normal'],
      },
    },
  },
} as Meta

const Template: Story<ModalPortalProps> = args => <ModalPortal {...args} />
export const MODAL_PORTAL = Template.bind({})

MODAL_PORTAL.storyName = 'Modal portal'
