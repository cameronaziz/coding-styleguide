import React from 'react'
import { connect } from 'react-redux'

// Props that will be passed down from Redux state
interface StateProps {
  isLoading: boolean
  results: SearchResult[]
  error?: Error
}

// Props that will be passed down from parents.
// Its ok to define an empty `ResultsProps`.
interface ResultsProps extends StateProps {

}

// This definitely needs to be a FunctionComponent
const Results: React.FunctionComponent<ResultsProps> = ({ results, isLoading }) => (
  <React.Fragment>
    {isLoading &&
      <div>
        Loading...
      </div>
    }
    {results.map((result) => (
      <div key={result.text}>
        {result.text}
      </div>
    ))}
  </React.Fragment>
)

const mapStateToProps = (state: ReduxState): StateProps => ({
  isLoading: state.search.isLoading,
  results: state.search.results,
  error: state.search.error
})

// mapDispatchToProps is an optional parameter but if you don't need state either, don't use connect
export default connect(mapStateToProps)(Results)
