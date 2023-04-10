import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// UI Components
import { Autocomplete } from './index'
// Types
import { AutocompleteProps, VariantType } from './Autocomplete.interface'
// Constants
import { MATERIAL } from '../../constants'

const mockedOptions = [
  {
    name: 'Option 1',
    category: 'Strings',
  },
  {
    name: 'Option 2',
    category: 'Strings',
  },
  {
    name: 'Option 3',
    category: 'Strings',
  },
  {
    name: '1',
    category: 'Numbers',
  },
  {
    name: '2',
    category: 'Numbers',
  },
  {
    name: '3',
    category: 'Numbers',
  },
]

export default {
  title: 'Commons/Autocomplete',
  component: Autocomplete,
  args: {
    inputId: 'autocomplete-input',
    optionList: mockedOptions,
    getOptionLabel: (option: { name: string }) => option.name,
    groupBy: (option: { category: string }) => option.category,
    translations: {
      placeholder: 'Write something',
      noResult: 'Ups! Nothing found',
    },
    variant: MATERIAL.variants.filled as VariantType,
    maxWidth: 400,
    label: 'Autocomplete',
    customIcon: '',
    hasError: false,
    errorMessage: '',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.values(MATERIAL.variants),
      },
    },
    customIcon: {
      control: {
        type: 'text',
      },
    },
    hasError: {
      control: {
        type: 'boolean',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<AutocompleteProps> = args => {
  return (
    <Autocomplete
      {...args}
      handleSelectItem={item => {
        action('Selected item')(item)
      }}
    />
  )
}

export const AUTOCOMPLETE = Template.bind({})

AUTOCOMPLETE.storyName = 'Default'
