import { ReactNode } from 'react'
import * as S from './styles'

import Header from '../Header'
import Footer from '../Footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <S.Wrapper>{children}</S.Wrapper>
    <Footer />
  </>
)

export default Layout
