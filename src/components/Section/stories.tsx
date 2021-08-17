import { Story, Meta } from '@storybook/react/types-6-0'
import Section from '.'

export default {
  title: 'Section',
  component: Section
} as Meta

export const Default: Story = (args) => {
  return (
    <Section {...args}>
      <div className="col-sm-4 bg-primary p-3">Primary</div>
      <div className="col-sm-4 bg-success p-3">Success</div>
      <div className="col-sm-4 bg-danger p-3">Danger</div>
    </Section>
  )
}
