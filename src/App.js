import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <div id="App">
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    )
  }
}

export default App
