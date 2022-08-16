import Heading from 'components/Heading';
import RatingCard from 'components/RatingCard';

import * as S from 'components/Reviews/styles';

const Rating = ({
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
    {items.map(item => <RatingCard key={item.id} {...item} />)}
  </S.Wrapper>
)

export default Rating;