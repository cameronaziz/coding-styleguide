import React from 'react'
import Search from '../search'
import Results from '../results'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <Search title="Search People" />
      <Results />
    </header>
  </div>
)

export default App
