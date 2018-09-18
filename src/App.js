import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'
import Router from './router'

import './style.css'

const initialState = {}
const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  applyMiddleware(routerMiddleware(history), sagaMiddleware),
)
sagaMiddleware.run(sagas)

const App = () => (
  <Provider store={store}>
    <Router history={history} />
  </Provider>
)

export default App
