import React from 'react'
import { connect } from 'react-redux'
import { StyledResults, StyledLoader } from './ui'

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
// You don't need to defined what the return value is because React.FunctionComponent handles that for you.
const Results: React.FunctionComponent<ResultsProps> = ({ results, isLoading }) => (
  <StyledResults>
    {isLoading ?
      <StyledLoader /> :
      // We can map the results even with none because it is an array in state
      results.map((result) => (
      <div key={result.name}>
        {result.name}
      </div>
    ))}
  </StyledResults>
)

const mapStateToProps = (state: ReduxState): StateProps => ({
  isLoading: state.search.isLoading,
  results: state.search.results,
  error: state.search.error
})

// mapDispatchToProps is an optional parameter but if you don't need state either, don't use connect
export default connect(mapStateToProps)(Results)
