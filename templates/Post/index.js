import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Base from 'templates/Base';

import SinglePageInfo from 'components/SinglePageInfo';
import TextContent from 'components/TextContent';

import * as S from 'templates/Game/styles';

const Post = ({
  id,
  slug,
  cover,
  pageInfo,
  description,
}) => (
  <Base>
    <NextSeo
      title={`${pageInfo.title} - Angry Nerds`}
      description={pageInfo.lead}
      canonical={`https://angrynerds.pl/gra/${slug}`}
      openGraph={{
        url: `https://angrynerds.pl/gra/${slug}`,
        title: `${pageInfo.title} - Angry Nerds`,
        images: [
          {
            url: cover,
            alt: `${pageInfo.title}`
          }
        ]
      }}
    />
    <S.Cover>
      <Image src={cover} alt={pageInfo.title} layout="fill" />
    </S.Cover>

    <S.Main>
      <S.SectionInfo>
        <SinglePageInfo {...pageInfo} />
      </S.SectionInfo>

      <S.SectionDescription>
        <TextContent content={description} />
      </S.SectionDescription>
    </S.Main>
  </Base>
)

export default Post;