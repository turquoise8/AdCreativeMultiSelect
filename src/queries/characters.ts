import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String!) {
    characters(page: 1, filter: { name: $name }) {
      results {
        name
        id
        episode {
          id
        }
        image
      }
    }
  }
`;
