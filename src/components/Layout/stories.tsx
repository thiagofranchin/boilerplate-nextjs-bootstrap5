import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '.'

export default {
  title: 'Layout',
  component: Layout
} as Meta

export const Default: Story = (args) => (
  <Layout {...args}>
    <h1>Content</h1>
  </Layout>
)
