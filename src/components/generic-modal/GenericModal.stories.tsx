import { Meta, Story } from '@storybook/react'
import { GenericModal } from './GenericModal'
import { ModalComponentProp } from './GenericModal.interface'

const children = <div>This is a children</div>

export default {
  title: 'Commons/GenericModal',
  component: GenericModal,
  args: {
    styles: {
      top: 0,
      right: 0,
      afterX: 10,
    },
  },
} as Meta

const TemplateDefault: Story<ModalComponentProp> = args => <GenericModal {...args}>{children}</GenericModal>

export const MODAL = TemplateDefault.bind({})

MODAL.storyName = 'Generic Modal'
