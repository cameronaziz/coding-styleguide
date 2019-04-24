import { cloneDeep } from 'lodash'

// Do not define this type as Partial<SearchState>.
const initialState: Search.State = {
  isLoading: false,
  results: [],
}

// Use a switch statement on `action.type`. Typescript will figure out what parameters are on your action.
const searchReducer = (state: Search.State = initialState, action: Search.ActionTypes): Search.State => {
  switch(action.type) {
    case'search/SET_IS_LOADING': {
      // Don't forget that state should be treated as immutable
      const stateCopy = cloneDeep(state)
      stateCopy.isLoading = action.status
      return stateCopy
    }
    case'search/RECEIVE_RESULTS': {
      const stateCopy = cloneDeep(state)
      stateCopy.results = action.results
      return stateCopy
    }
    case'search/RECEIVE_ERROR': {
      // We prefer lodash.cloneDeep(), but immutable.fromJS() works as well.
      const stateCopy = cloneDeep(state)
      stateCopy.error = action.error
      // Just make sure that the state object does not have immutable objects and it is just plain JS.
      return stateCopy
    }
    default: {
      // Don't forget to return state on actions that are on other reducers.
      return state
    }
  }
}

// We like to define the constant then `export default` at the end of the file so its easy to find.
export default searchReducer