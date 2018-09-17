import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import Router from './router'
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
)
//egisterServiceWorker();
