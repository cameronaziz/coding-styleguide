// Action.type should be reducerName/ACTION_TYPE.
export interface SetIsLoading {
  type: 'search/SET_IS_LOADING'
  status: boolean
}

export interface ReceiveResults {
  type: 'search/RECEIVE_RESULTS'
  results: Search.Result[]
}

// Don't forget to handle errors.
export interface ReceiveError {
  type: 'search/RECEIVE_ERROR'
  error: Error
}

// Union Action Types with the type ReducerType.
export type ThunkActions = ReceiveResults | ReceiveError
export type ActionTypes = SetIsLoading | ThunkActions
