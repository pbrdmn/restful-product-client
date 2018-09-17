import { fork } from 'redux-saga/effects'
import productsSaga from './products'

export default function* root() {
  yield fork(productsSaga)
}
