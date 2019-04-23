import React from 'react'
import Search from '../search'
import Results from '../results'
import { StyledApp, GlobalStyle } from './ui'

const App: React.FunctionComponent = () => (
  <StyledApp>
    <GlobalStyle />
    <Search title="Search Our Team" />
    <Results />
  </StyledApp>
)

export default App
