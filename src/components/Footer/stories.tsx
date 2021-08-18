import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    options: { showPanel: false }
  }
} as Meta

export const Default: Story = (args) => <Footer {...args} />
