import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import rootReducer from '.'

// A function that can take a state (from cache or database) and creates a store
const configureStore = (preloadedState?: Partial<ReduxState>): Store<ReduxState, ReduxActionTypes> => {
  const middlewares = [thunkMiddleware as ThunkMiddleware<ReduxState, ReduxActionTypes>]
  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore<ReduxState, ReduxActionTypes, {}, {}>(rootReducer, preloadedState, enhancer)

  return store
}

export default configureStore
