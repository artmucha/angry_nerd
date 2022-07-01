import { gql } from '@apollo/client';
import { PostFragment } from 'graphql/fragments/posts';
import { GameFragment } from 'graphql/fragments/games';

export const QUERY_HOME = gql`
  query QueryHome {
    posts {
      data {
        attributes {
          ...PostFragment
        }
      }
    }

    bestGames: games {
        data {
          attributes {
            ...GameFragment
          }
        }
    }

    upcomingGames: games {
        data {
          attributes {
            ...GameFragment
          }
        }
    }
  }
  ${PostFragment}
  ${GameFragment}
`