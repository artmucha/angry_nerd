import ExploreGames from 'templates/ExploreGames';
import {
  genreFields,
  platformFields,
} from 'utils/filters/fields';

import { fetchAPI } from 'utils/helpers';

const AllGamesPage = (props) => <ExploreGames {...props} />

export async function getServerSideProps({ query }) {

  const page = query.page ?? 1;

  const filterPlatforms = {
    title: 'Platforma',
    name: 'platform',
    type: 'link',
    fields: platformFields
  };

  const filterGenres = {
    title: 'Gatunek',
    name: 'genres',
    type: 'radio',
    fields: genreFields
  };

  const filterItems = [
    filterPlatforms,
    filterGenres,
  ];

  const games = await fetchAPI('/games', { 
    populate: ['platform', 'cover', 'meta', 'genres'],
    filters: {
      genres: {
        slug: {
          $eq: query.genres,
        },
      },
      title: {
        $contains: query.title
      }
    },
    sort: ['released:desc'],
    pagination: {
      page: page,
      pageSize: 3,
    },
  });

  return {
    props: {
      games: games.data,
      filterItems,
      pagination: games.meta.pagination
    }
  }
};

export default AllGamesPage;