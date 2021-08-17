import { ReactNode } from 'react'
import * as S from './styles'

import Header from '../Header'
import Footer from '../Footer'

type Props = {
  children?: ReactNode
  classComponent?: string
}

const Layout = ({ classComponent, children }: Props) => (
  <S.Wrapper className={`layout ${classComponent ? classComponent : ''}`}>
    <Header />
    <main>{children}</main>
    <Footer />
  </S.Wrapper>
)

export default Layout
