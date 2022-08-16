import Heading from 'components/Heading';
import ReviewCard from 'components/ReviewCard';

import * as S from './styles';

const Reviews = ({
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
    {items.map(item => <ReviewCard key={item.id} {...item} />)}
  </S.Wrapper>
)

export default Reviews;