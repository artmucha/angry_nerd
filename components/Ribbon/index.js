import * as S from './styles';

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon;