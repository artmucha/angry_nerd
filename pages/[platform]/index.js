import ExploreGames from 'templates/ExploreGames';
import {
  genreFields,
  platformFields,
} from 'utils/filters/fields';

import { fetchAPI } from 'utils/helpers';

const GamesPage = (props) => <ExploreGames {...props} />

export async function getServerSideProps({ params, query }) {

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
      platform: {
        slug: {
          $eq: params.platform,
        },
      },
      genres: {
        slug: {
          $eq: query.genres,
        },
      }
    },
    sort: ['released:desc'],
    pagination: {
      page: page,
      pageSize: 12,
    },
  });

  return {
    props: {
      games: games.data,
      filterItems,
      platform: params.platform,
      pagination: games.meta.pagination
    }
  }
};

export default GamesPage;