import { Story, Meta } from '@storybook/react'
import { ModalComments } from './ModalComments'
import { ModalCommentsProps } from './ModalComments.interface'

export default {
  title: 'Commons/ModalDescription',
  component: ModalComments,
  args: {
    comment: 'This is a text comment for storybook',
    title: 'Title Modal',
    textButtonCancel: 'Cancel',
    textButtonAccept: 'Accept',
    messageError: 'Message error for comments',
    marginTitle: '0 0 4px 0',
    modalCommentPlaceholder: 'Placeholder',
    onAcceptAction: e => console.log('Click Accept', e),
    onCancelAction: e => console.log('Click Cancel', e),
    setNewComment: e => console.log('Set new comment', e),
  },
} as Meta

const TemplateDefault: Story<ModalCommentsProps> = args => <ModalComments {...args} />

export const MODALDESCRIPTION = TemplateDefault.bind({})

MODALDESCRIPTION.storyName = 'Modal Description'
