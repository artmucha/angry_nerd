import { Star } from '@styled-icons/material-outlined/Star';
import theme from 'styles/theme';
import * as S from './styles';

const Rating = ({
    rating,
    size,
}) => (
  <S.Wrapper>
    <Star size={size} fill={theme.colors.orange} />
    <S.Rating size={size}>{rating.toFixed(1)}</S.Rating>
  </S.Wrapper>
)

export default Rating;