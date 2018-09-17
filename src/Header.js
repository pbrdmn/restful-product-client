import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <header>
    <h1>Demo Site</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  </header>
)
