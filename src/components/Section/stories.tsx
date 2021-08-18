import { Story, Meta } from '@storybook/react/types-6-0'
import Section from '.'

export default {
  title: 'Section',
  component: Section,
  parameters: {
    options: { showPanel: true }
  },
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: [
          'transparent',
          'white',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'light',
          'dark'
        ]
      }
    }
  }
} as Meta

export const Default: Story = (args) => {
  return (
    <Section {...args}>
      <div className="col-12 bg-dark py-2" />
    </Section>
  )
}

Default.args = {
  bgColor: 'light',
  classSection: 'py-5',
  isFluid: false
}
