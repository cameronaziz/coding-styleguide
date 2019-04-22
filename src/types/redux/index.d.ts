// The entire redux state.
interface ReduxState {
  search: SearchState
}

// Every redux action. A `type` property is required for each one.
// This means thunks should not be included.
type ReduxActionTypes = SearchActionTypes

// Helper types
// This can be dropped in for any dispatch in both dispatch in thunks and mapDispatchToProps.
type ReduxThunkDispatch = ThunkDispatch<ReduxState, {}, ReduxActionTypes>
// Pass in generic R for what is to be returned from the thunk.
type ThunkResult<R> = ThunkAction<R, ReduxState, {}, ReduxActionTypes>
