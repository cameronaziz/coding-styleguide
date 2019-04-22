import React from 'react'
import Search from '../search'
import Results from '../results'

const App = () => (
  <div className="App">
    <header className="App-header">
      <Search title="Search Our Team" />
      <Results />
    </header>
  </div>
)

export default App
