import { combineReducers } from 'redux'
import { reducers as products } from './models/products'

export default combineReducers({
  products,
})
