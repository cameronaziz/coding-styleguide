// Since it is a declaration file, prepend everything with the reducer name.
// Action.type should be reducerName/ACTION_TYPE.
interface SearchSetIsLoading {
  type: 'search/SET_IS_LOADING'
  status: boolean
}

interface SearchReceiveResults {
  type: 'search/RECEIVE_RESULTS'
  results: SearchResult[]
}

// Don't forget to handle errors.
interface SearchReceiveError {
  type: 'search/RECEIVE_ERROR'
  error: Error
}

// Union Action Types with the type ReducerType.
type SearchThunkActions = SearchReceiveResults | SearchReceiveError
type SearchActionTypes = SearchSetIsLoading | SearchThunkActions
