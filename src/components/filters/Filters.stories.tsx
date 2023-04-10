import { Story, Meta } from '@storybook/react'

// UI Components
import { Filters } from './Filters'

// Mocks
import { SIMPLE_FILTERS, SIMPLE_CONFIG, SIMPLE_APPLIED } from './utils/mocks'

// Types
import { FiltersTypes } from './Filters.interface'

const trackEvent = params => {
  console.info('event tracked', params)
}

export default {
  title: 'Commons/Filters',
  component: Filters,
  args: {
    appliedFilters: SIMPLE_APPLIED,
    deleteFilter: () => true,
    filters: SIMPLE_FILTERS,
    trackEvent,
    lang: 'es',
    config: SIMPLE_CONFIG,
    notTypeable: false,
  },
  argTypes: {},
} as Meta

const Template: Story<FiltersTypes> = args => <Filters {...args} />

export const FILTERS = Template.bind({})

FILTERS.storyName = 'Filters'
