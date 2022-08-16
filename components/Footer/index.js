import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';

import menu from 'constans/menu';
import { platforms } from 'constans/platforms';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <S.Wrapper>
    <Logo color="dark" />
    <S.Content>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          O nas
        </Heading>
        <p>
          Angry Nerds to najlepsza strona dla graczy!
        </p>
      </S.Column>

      <S.Column aria-label="categories">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Kategorie
        </Heading>
        <nav id="categories">
          {menu.map(({name, slug}) => (
            <Link key={slug} href={slug}>
              <a>{name}</a>
            </Link>
          ))}
        </nav>
      </S.Column>

      <S.Column aria-labelledby="platforms">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Platformy
        </Heading>

        <nav id="platforms">
          {platforms.map(({name, slug}) => (
            <Link key={slug} href={slug}>
              <a>{name}</a>
            </Link>
          ))}
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Kontakt
        </Heading>

        <a href="mailto:kontakt@angrynerds.pl">kontakt@angrynerds.pl</a>
      </S.Column>
    </S.Content>

    <S.Copyright>Angry Nerds {currentYear} © Wszystkie prawa zastrzeżone.</S.Copyright>
  </S.Wrapper>
);

export default Footer;