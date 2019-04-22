// There is no typescript types for this, just make sure you define everything in a sibling `types.d.ts`.
import gql from 'graphql-tag'

export const FILTER_PERSONS_BY_NAME = gql`
  query FilteredPersons($name: String!) {
    allPersons(filter: { name_contains: $name }) {
      id
      name
    }
  }
`

export const ALL_PERSONS = gql`
  query AllPersons {
    allPersons(orderBy: createdAt_DESC) {
      id
      name
    }
  }
`
