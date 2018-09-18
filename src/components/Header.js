import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1 className="header__title">Demo Site</h1>
    <div className="header__links">
      <NavLink
        to="/"
        className="header__link"
        activeClassName="header__link--active"
        exact={true}>
        Home
      </NavLink>
      <NavLink
        to="/products"
        className="header__link"
        activeClassName="header__link--active">
        Products
      </NavLink>
    </div>
  </header>
)

export default Header
