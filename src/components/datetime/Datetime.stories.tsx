import { Story, Meta } from '@storybook/react'
// Utils
import moment from 'moment'
// UI Components
import { Datetime } from './Datetime'
import { DatetimeProps } from './Datetime.interface'

const translations = {
  ok: 'ok',
  clear: 'clear',
  today: 'today',
  addDate: 'addDate',
  cancel: 'cancel',
}

export default {
  title: 'Commons/Datetime',
  component: Datetime,
  args: {
    lang: 'en',
    icon: true,
    label: 'Label',
    format: 'YYYY-MM-DD HH:mm:ss',
    tooltip: 'Esta es la fecha',
    disabled: false,
    clearable: true,
    isExpired: false,
    emptyLabel: true,
    defaultDate: moment('2020-01-06').format('YYYY-MM-DD HH:mm:ss'),
    handleUpdate: () => {
      // default function
    },
    translations,
    minDate: moment('2020-01-04').format('YYYY-MM-DD HH:mm:ss'),
    error: false,
    helperText: '',
  },
  argTypes: {
    lang: {
      control: {
        type: 'select',
        options: ['es', 'en', 'br'],
      },
    },
  },
} as Meta

const Template: Story<DatetimeProps> = args => <Datetime {...args} />

export const DATETIME_PICKER = Template.bind({})

DATETIME_PICKER.storyName = 'Datetime picker'
