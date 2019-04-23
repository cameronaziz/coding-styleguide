import api from '../../utils/api'
import * as creators from './creators'
import { client, FILTER_PERSONS_BY_NAME } from '../../graphql-queries'

export const requestSearch = (params: SearchRequest): ThunkResult<Promise<boolean>> => {
  // `return` an async function (just a promise with syntatical sugar)
  return async (dispatch: ReduxThunkDispatch): Promise<boolean> => {
    // `dispatch` the isLoading action
    dispatch(creators.setIsLoading(true))
    let success = true
    try {
      // `await` the side effect...
      const results = await api(params.term)
      // `dispatch` to receive the data or...
      dispatch(creators.receiveResults(results))
    } catch(error) {
      // `catch` the error and `dispatch` the error action.
      dispatch(creators.receiveError(error))
      success = false
    }
    // dispatch the isLoading action.
    dispatch(creators.setIsLoading(false))
    // Return true if the action is successful.
    // Because its a promise, a `.then` can be added to the execution of the action thunk.
    return success
  }
}

// Everything of this thunk is the same, except the graphql piece.
export const requestRemoteSearch = (params: SearchRequest): ThunkResult<Promise<boolean>> => {
  return async (dispatch: ReduxThunkDispatch): Promise<boolean> => {
    dispatch(creators.setIsLoading(true))
    let success = true
    try {
      // For graphql, pass in the data that is expected and the variables that will be sent.
      // Variables generic value is optional, no need to pass in void or {}
      const results = await client.query<FilteredPersonsData, FilteredPersonsVariables>({
        query: FILTER_PERSONS_BY_NAME,
        variables: {
          name: params.term
        }
      })
      dispatch(creators.receiveResults(results.data.allPersons))
    } catch(error) {
      dispatch(creators.receiveError(error))
      success = false
    }
    dispatch(creators.setIsLoading(false))
    return success
  }
}