// Since it is a declaration file, prepend everything with the reducer name.
// Define reducer state.
interface SearchState {
  isLoading: boolean
  results: SearchResult[]
  error?: Error
}

// Define parameters and other types that pertain to the reducer.
interface SearchRequest {
  term: string
}

interface SearchResult {
  text: string
}
