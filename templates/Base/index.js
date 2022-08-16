import { useContext } from 'react';

import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import { AuthContext } from 'providers/AuthProvider';

import * as S from './styles';

const Base = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return (
    <S.Wrapper>
      <Container>
        <Menu {...auth} />
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