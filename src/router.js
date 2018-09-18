import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import Header from './components/Header'
import Home from './components/Home'
import Products from './containers/Products'

const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </main>
    </div>
  </ConnectedRouter>
)

export default Router
