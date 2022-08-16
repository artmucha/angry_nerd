import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Base from 'templates/Base';

import SinglePageInfo from 'components/SinglePageInfo';
import SinglePageDetails from 'components/SinglePageDetails';
import Gallery from 'components/Gallery';
import { Divider } from 'components/Divider';
import Heading from 'components/Heading';
import Highlight from 'components/Highlight';
import Showcase from 'components/Showcase';

import * as S from './styles';

const Game = ({
  gameInfo,
  gallery,
  details,
  adminReview,
  similarGames
}) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - Angry Nerds`}
      description={gameInfo.description}
      canonical={`https://angrynerds.pl/${gameInfo.platform.slug}/${gameInfo.slug}`}
      openGraph={{
        url: `https://angrynerds.pl/${gameInfo.platform.slug}/${gameInfo.slug}`,
        title: `${gameInfo.title} - Angry Nerds`,
        images: [
          {
            url: gameInfo.cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />
    <S.Cover>
      <Image src={gameInfo.cover} alt={gameInfo.title} layout="fill" />
    </S.Cover>

    <S.Main>
      <S.SectionInfo>
        <SinglePageInfo {...gameInfo} />
      </S.SectionInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDetails>
        <SinglePageDetails slug={gameInfo.slug} {...details} />
        <Divider />
      </S.SectionDetails>

      {!!adminReview && 
      <S.SectionDetails>
        <Heading lineLeft lineColor="secondary">Recenzja redakcji</Heading>
        <Highlight 
          title={adminReview.title}
          slug={`/blog/${adminReview.slug}`}
          cover={adminReview.cover.data.attributes.url}
        />
      </S.SectionDetails>
      }

      {!!similarGames && 
        <Showcase title="Te gry mogą Cię zainteresować" items={similarGames} />
      }
    </S.Main>
  </Base>
);

export default Game;