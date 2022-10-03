import * as S from './styles';

const FlashMsg = ({flash}) => (
  <S.Wrapper color={flash.status}>
    {flash.message}
  </S.Wrapper>
);

export default FlashMsg;