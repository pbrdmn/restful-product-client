import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Demo Site</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  </header>
)

export default Header
