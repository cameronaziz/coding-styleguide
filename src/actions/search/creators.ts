// Keep action creators as simple as possible.
// Do the data manipulation before in the thunk or after in the reducer.
export const receiveError = (error: Error): Search.ReceiveError => ({
  type: 'search/RECEIVE_ERROR',
  error
})

export const receiveResults = (results: Search.Result[]): Search.ReceiveResults => ({
  type: 'search/RECEIVE_RESULTS',
  results
})

export const setIsLoading = (status: boolean): Search.SetIsLoading => ({
  type: 'search/SET_IS_LOADING',
  status
})
