import { Story, Meta } from '@storybook/react/types-6-0'
import ContentCard from '.'

export default {
  title: 'ContentCard',
  component: ContentCard
} as Meta

export const Default: Story = (args) => <ContentCard {...args} />
