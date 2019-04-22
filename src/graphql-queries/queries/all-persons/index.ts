import gql from 'graphql-tag'

export const ALL_PERSONS = gql`
  query AllPersons {
    allPersons(orderBy: createdAt_DESC) {
      id
      name
    }
  }
`

export const FILTER_PERSONS_BY_NAME = gql`
  query FilteredPersons($name: String!) {
    allPersons(filter: { name_contains: $name }) {
      id
      name
    }
  }
`
