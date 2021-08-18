import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '.'
import Section from '../Section'

export default {
  title: 'Layout',
  component: Layout,
  parameters: {
    options: { showPanel: false },
    controls: {
      disabled: true
    }
  }
} as Meta

export const Default: Story = (args) => (
  <Layout {...args}>
    <Section classSection="py-5" bgColor="light">
      <div className="col-md-8">
        <h1>HOME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, cum
          vero rem labore voluptas laboriosam ex maiores dolore fugiat
          blanditiis! Explicabo unde numquam laudantium possimus quas iste
          accusamus hic laborum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          accumsan arcu, a faucibus augue. Etiam mollis augue non diam lobortis,
          at hendrerit diam elementum. Fusce semper vulputate rhoncus. Sed
          bibendum, ex a ullamcorper accumsan, ante sem dapibus sapien, quis
          tincidunt diam velit id nisi. Nunc eleifend, nisi vitae feugiat
          aliquam, orci diam pulvinar risus, vitae tempor lacus neque ac metus.
          Nam congue tincidunt ex, vitae sodales nulla efficitur at. Donec
          sodales ullamcorper urna. Aenean placerat diam vitae enim feugiat
          tristique. Aliquam maximus dolor nec felis sodales, sed aliquam lorem
          rutrum. Praesent vehicula orci at diam euismod, et euismod orci porta.
          Praesent ac magna ullamcorper, hendrerit risus ac, vehicula ipsum.
          Donec placerat risus lectus, at dignissim augue placerat non.
          Curabitur quis libero ornare, fermentum neque sit amet, molestie eros.
        </p>
        <p>
          Pellentesque sollicitudin turpis a semper porttitor. Praesent
          facilisis lorem vitae laoreet porta. Suspendisse quis neque ac dolor
          blandit varius nec sed elit. Curabitur at nibh odio. Vivamus sed risus
          suscipit, varius odio ut, bibendum justo. Duis est velit, dapibus sed
          luctus quis, hendrerit nec metus. Quisque pellentesque, dolor vitae
          auctor aliquam, magna odio dapibus risus, id semper velit nibh nec
          orci. Quisque posuere leo ac finibus dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean id libero turpis. Curabitur tristique rutrum iaculis.
        </p>
        <p>
          Donec leo neque, blandit quis augue vel, accumsan tincidunt ex. Nunc
          elementum pulvinar enim at ultrices. Integer tempor arcu et purus
          faucibus, a egestas purus ornare. Quisque ullamcorper volutpat tortor,
          et egestas nunc iaculis consectetur. Donec at elit id mi fringilla
          laoreet. Pellentesque quis blandit dui. Praesent at quam sit amet nibh
          convallis facilisis. Suspendisse dictum accumsan erat, sit amet
          finibus justo mattis et.
        </p>
        <p>
          Nulla euismod dapibus enim, vitae ullamcorper felis elementum at.
          Nullam aliquam, orci nec pharetra pretium, ipsum nisi luctus arcu, et
          fringilla tellus tortor nec nunc. Proin euismod, leo sed mollis
          efficitur, mauris mi scelerisque est, sit amet facilisis ipsum nulla
          eget urna. Duis nec dictum arcu, scelerisque lacinia eros. Sed in enim
          mattis risus molestie sollicitudin. Sed vel cursus turpis. Fusce at
          nisl velit. Pellentesque at interdum risus, nec luctus dui.
          Suspendisse congue ipsum in quam mattis, vel fermentum lorem rhoncus.
          Praesent consequat magna dolor, ut tempus lectus elementum ac. Aenean
          ac cursus elit. Donec dignissim ex fringilla ante rhoncus hendrerit.
          Sed mattis mauris tincidunt tempus lobortis. Etiam ultricies placerat
          scelerisque. Fusce eleifend neque dui. Mauris nec dui accumsan,
          pellentesque felis sed, sagittis tellus.
        </p>
      </div>
    </Section>
  </Layout>
)
