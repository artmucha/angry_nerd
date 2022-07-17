import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import * as S from './styles';

const Base = ({ children }) => {

  return (
    <S.Wrapper>
      <Container>
        {/* <Menu username={session.user.name} loading={loading} /> */}
        <Menu username loading={false} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base;