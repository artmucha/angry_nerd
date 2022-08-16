import Link from 'next/link';
import { Windows, Playstation, Xbox, Switch } from '@styled-icons/remix-fill';

import Heading from 'components/Heading';

import * as S from './styles';

const SinglePageDetails = ({
  platform,
  platforms,
  rating,
  genres,
  slug
}) => {
  const platformIcons = {
    'pc': <Windows title="Windows" size={18} />,
    'ps4': <Playstation title="Playstation 4" size={18} />,
    'ps5': <Playstation title="Playstation 5" size={18} />,
    'xbox-one': <Xbox title="Xbox One" size={18} />,
    'xbox-series-x': <Xbox title="Xbox Series X / S" size={18} />,
    'switch': <Switch title="Switch" size={18} />,
  };

  return (
    <S.Wrapper>
      <Heading lineLeft lineColor="secondary">
        Informacje
      </Heading>

      <S.Content>
        <S.Block>
          <S.Label>Platformy</S.Label>
          <S.IconsWrapper>
            {platforms.map(({attributes}) => (
              <Link key={attributes.name} href={`/${attributes.slug}/${slug}`} passHref>
                <S.Icon>
                  {platformIcons[attributes.slug]}
                  <span>{attributes.name}</span>
                </S.Icon>
              </Link>
            ) )}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Gatunek</S.Label>
            {genres.map(({attributes}) => (
              <Link key={attributes.name} href={`/${platform.slug}/${attributes.slug}`} passHref>
                <S.Icon>
                  <span>{attributes.name}</span>
                </S.Icon>
              </Link>
            ) )}
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
};

export default SinglePageDetails;