import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Products from './Products'

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router
