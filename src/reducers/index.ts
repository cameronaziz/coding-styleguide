import { combineReducers } from 'redux'
import searchReducer from './search'

const rootReducer = combineReducers<ReduxState>({
  search: searchReducer
})

export default rootReducer
