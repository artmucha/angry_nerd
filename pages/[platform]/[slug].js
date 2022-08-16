import { useRouter } from 'next/router';

import Game from 'templates/Game';

import { fetchAPI } from "utils/helpers";
import { getImageUrl } from 'utils/getImageUrl';

const Index = (props) => {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />
};

export async function getStaticPaths() {
  const { data } = await fetchAPI('/games', { populate: ['platform'] });

  const paths = data.map(({ attributes }) => ({
    params: { platform: attributes.platform.data.attributes.slug, slug: attributes.slug }
  }));

  return { paths, fallback: true }
};

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(`/games/${params.slug}`);

  if (!data) return { notFound: true };

  return {
    props: {
      gameInfo: {
        id: data.id,
        title: data.attributes.title,
        platform: data.attributes.platform.data.attributes,
        cover: getImageUrl(data.attributes.cover?.data.attributes.url),
        slug: params.slug,
        rating: 9.8,
      },
      gallery: data.attributes.gallery.data.map((image) => ({
        src: getImageUrl(image.attributes.url),
      })),
      details: {
        platform: data.attributes.platform.data.attributes,
        platforms: data.attributes.platforms.data,
        genres: data.attributes.genres.data,
      },
      adminReview: data.attributes.post.data?.attributes || null,
      // similarGames: gamesMapper(genre.data?.attributes.games?.data)
    }
  }
};

export default Index;