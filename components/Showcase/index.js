import CardSlider from 'components/CardSlider';
import Heading from 'components/Heading';

import * as S from './styles';

const Showcase = ({
  title,
  items,
  color = 'white'
}) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!items && <CardSlider items={items} color={color} />}
  </S.Wrapper>
)

export default Showcase;