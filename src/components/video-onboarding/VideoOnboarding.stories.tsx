import { Story, Meta } from '@storybook/react'
// UI Components
import { OnboardingPresentation, OnboardingPresentationProps } from './onboarding-presentation'

const mockData = {
  elementId: 'modal-portal',
  title: 'Presupuestador',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris convallis, eleifend odio vitae,consectetur quam. Nunc sed lectus lacus. Cras egestas ante eget velit cursus congue.',
  thumbnail: 'https://i.ytimg.com/vi/9-MrtYuIoiE/maxresdefault.jpg',
  alt: 'thumbnail COR',
  videoUrl: 'https://www.youtube.com/embed/yZ9p8rf9PO0',
  collapsedDescription: 'Ver video',
  // tutorialLink: 'https://cor.zendesk.com/hc/es', // Commented until the link feature is defined
}

export default {
  title: 'Commons/OnboardingPresentation',
  component: OnboardingPresentation,
  args: {
    title: mockData.title,
    description: mockData.description,
    collapsedDescription: mockData.collapsedDescription,
    thumbnail: mockData.thumbnail,
    alt: mockData.alt,
    elementId: mockData.elementId,
    videoUrl: mockData.videoUrl,
  },
} as Meta

const Template: Story<OnboardingPresentationProps> = args => <OnboardingPresentation {...args} />
export const MODAL_ONBOARDING = Template.bind({})

MODAL_ONBOARDING.storyName = 'Onboarding Presentation'
