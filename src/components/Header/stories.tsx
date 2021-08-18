import { Story, Meta } from '@storybook/react/types-6-0'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    options: { showPanel: false }
  }
} as Meta

export const Default: Story = (args) => <Header {...args} />
