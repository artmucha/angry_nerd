import * as S from './styles';

const FlashMsg = ({status, message}) => (
  <S.Wrapper color={status}>
    {message}
  </S.Wrapper>
);

export default FlashMsg;