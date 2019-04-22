import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/search'

// Props that will be passed down from Redux state
interface StateProps {
  error?: Error
  isLoading: boolean
  results: SearchResult[]
}

interface DispatchProps {
  setIsLoading: typeof actions.setIsLoading
  // Thunks need to return what is actually returned, not just `typeof thunkAction`
  requestSearch: (params: SearchRequest) => Promise<boolean>
}

// Props that will be passed down from parents
interface SearchBarProps extends StateProps, DispatchProps {
  title: string
}

// This can be a class component but try to use React hooks for lifecycle methods and state
const Search: React.FunctionComponent<SearchBarProps> = ({ requestSearch, title }) => {
  // <string> is important or else it will be any and type checking will not occur on the action
  const [currentInput, setCurrentInput] = React.useState<string>()

  // The event is a ChangeEvent, but you need to pass in what type of element is changing
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setCurrentInput(value)
  }

  // The event is a KeyboardEvent, but you need to pass in what type of element is changing
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === 13) {
      // search will be defined when this is called so order does not matter
      search()
    }
  }

  // This `requestSearch` function is a promise, you can act on it completing now
  const search = (): void => {
    if (currentInput) {
      // and it's type is defined in the thunk, so no need to define here
      requestSearch({ term: currentInput })
        .then((success) => {
          if (success) {
            console.log('Seach completed but State hasn\'t updated yet.')
          }
        })
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <input onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={search}>
        Search
      </button>
    </div>
  )
}

const mapStateToProps = (state: ReduxState): StateProps => ({
  isLoading: state.search.isLoading,
  results: state.search.results,
  error: state.search.error
})

// Don't forget to define what `dispatch` is.
const mapDispatchToProps = (dispatch: ReduxThunkDispatch) => ({
  setIsLoading: (status: boolean) => dispatch(actions.setIsLoading(status)),
  requestSearch: (params: SearchRequest) => dispatch(actions.requestSearch(params))
})

// You can use `bindActionCreators` if you prefer not to define what params
// const mapDispatchToProps = (dispatch: ReduxThunkDispatch) => bindActionCreators({
//   setIsLoading: actions.setIsLoading,
//   requestSearch: actions.requestSearch
// }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)