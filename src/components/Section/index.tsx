import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  bgColor?: string
  children: ReactNode
  isFluid?: boolean
  classContainer?: string
}

const Section = ({ bgColor, children, isFluid, classContainer }: Props) => (
  <S.Section className={`${bgColor && `bg-${bgColor}`}`}>
    <div
      className={`container${isFluid ? '-fluid' : ''}${
        classContainer ? ` ${classContainer}` : ''
      }`}
    >
      <div className="row">{children}</div>
    </div>
  </S.Section>
)

export default Section
