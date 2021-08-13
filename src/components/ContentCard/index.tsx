import Section from '../Section'
import * as S from './styles'

type Props = {
  classComponent?: string
  classContainer?: string
  contentIsFluid?: boolean
}

const ContentCard = ({
  classComponent,
  classContainer,
  contentIsFluid
}: Props) => (
  <S.Wrapper className={`content-card ${classComponent ? classComponent : ''}`}>
    <Section
      isFluid={contentIsFluid ? contentIsFluid : false}
      classContainer={classContainer}
    >
      <h1>ContentCard</h1>
    </Section>
  </S.Wrapper>
)

export default ContentCard
