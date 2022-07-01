import { gql } from '@apollo/client';

export const PostFragment = gql`
  fragment PostFragment on Post {
    title
    lead
    slug
    createdAt
    cover {
      data {
        attributes{
          url
        }
      }
    }
  }
`