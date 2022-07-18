import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <div></div>

        <div>
          <Heading size="huge">Angry Nerds</Heading>
          <S.Subtitle>
            <strong>Wybór gry staje się łatwy!</strong>
          </S.Subtitle>
        </div>

        <S.Footer>
          Angry Nerds {currentYear} © Wszystkie prawa zastrzeżone
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="dark" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;