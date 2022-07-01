import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    gameId
    title
    slug
    cover
    released
  }
`