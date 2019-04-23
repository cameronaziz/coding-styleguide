// Because these will be used in thunks, it will nest it in the `data` object.
// Simply define what the data will be.
// Prepend the query name, without underscores, as QueryNameData and QueryNameVariables
interface FilteredPersonsData {
  allPersons: SearchResult[]
}

interface FilteredPersonsVariables {
  name: string
}

// ALL_PERSONS query does not have any variables so do not define AllPersonsVariables
interface AllPersonsData {
  allPersons: SearchResult[]
}
