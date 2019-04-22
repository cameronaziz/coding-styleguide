import { combineReducers } from 'redux'
import searchReducer from './search'

const rootReducer = combineReducers<ReduxState, ReduxActionTypes>({
  search: searchReducer
})

export default rootReducer
