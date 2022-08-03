import { getImageUrl } from 'utils/getImageUrl';

export const postsMapper = (posts) =>  posts.map((post) => (
  {
    title: post.attributes.title,
    slug: `/blog/${post.attributes.slug}`,
    img: getImageUrl(post.attributes.cover.data.attributes.url),
  }
));

export const gamesMapper = (games) => games.map((game) => (
  {
    id: game.id,
    title: game.attributes.title,
    slug: `/${game.attributes.platform.data?.attributes.slug}/${game.attributes.slug}`,
    platform: game.attributes.platform.data?.attributes || null,
    img: getImageUrl(game.attributes.cover.data.attributes.url),
  }
));
