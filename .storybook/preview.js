import '../src/styles/global.scss'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
