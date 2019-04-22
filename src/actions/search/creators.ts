// Keep action creators as simple as possible.
// Do the data manipulation before in the thunk or after in the reducer.
export const receiveError = (error: Error): SearchReceiveError => ({
  type: 'search/RECEIVE_ERROR',
  error
})

export const receiveResults = (results: SearchResult[]): SearchReceiveResults => ({
  type: 'search/RECEIVE_RESULTS',
  results
})

export const setIsLoading = (status: boolean): SearchSetIsLoading => ({
  type: 'search/SET_IS_LOADING',
  status
})
