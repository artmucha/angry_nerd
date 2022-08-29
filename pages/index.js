import Home from 'templates/Home';
import { postsMapper, gamesMapper } from 'utils/mappers';
import { fetchAPI } from "utils/helpers";

const Index = (props) => <Home {...props} />;

export async function getStaticProps() {

  const [bestGames, newGames, posts] = await Promise.all([
    fetchAPI('/games', { 
      populate: ['cover', 'platform'],
      sort: ['ratingValue:desc'],
      pagination: {
        start: 0,
        limit: 10,
      },
    }),
    fetchAPI('/games', { 
      populate: ['cover', 'platform', 'ratings'],
      sort: ['ratings.createdAt:desc'],
      pagination: {
        start: 0,
        limit: 10,
      },
    }),
    fetchAPI('/posts', { 
      populate: ['cover'],
      pagination: {
        start: 0,
        limit: 10,
      },
    })
  ]);

  const banners = bestGames.data.slice(0,3);

  return {
    props: {
      banners: postsMapper(banners),
      bestGames: gamesMapper(bestGames.data),
      newGames: gamesMapper(newGames.data),
      blogPosts: postsMapper(posts.data),
    }
  }
};

export default Index;