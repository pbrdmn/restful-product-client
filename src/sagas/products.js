import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, actionTypes } from '../models/products'
import fetchProducts from '../services/products'

function* requestProducts() {
  try {
    const items = yield call(fetchProducts)
    yield put(actions.success({ items }))
  } catch (error) {
    yield put(actions.failure({ error }))
  }
}

function* saga() {
  yield takeLatest(actionTypes.request, requestProducts)
}

export default saga
