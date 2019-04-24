export * from './action-creators'
// Since it is a declaration file, prepend everything with the reducer name.
// Define reducer state.
export interface State {
  isLoading: boolean
  results: SearchResult[]
  error?: Error
}

// Define parameters and other types that pertain to the reducer.
export interface Request {
  term: string
}


export interface Result {
  id: string
  name: string
}

export as namespace Search