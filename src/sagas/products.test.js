import { put, delay } from 'redux-saga/effects'
import { actions } from '../models/products'
import saga, { requestProducts } from './products'

describe('Products Saga', () => {
  it('takeLatest', () => {
    const result = saga().next(actions.request())
    expect(result.done).toBe(false)
  })

  it('requests', () => {
    const mockFetch = jest.fn(() => [{ id: 1 }])

    const gen = requestProducts({}, mockFetch)

    const result = gen.next()
    expect(result.value.PUT.action).toEqual({
      type: 'PRODUCTS_SUCCEEDED',
      params: { items: [{ id: 1 }] },
    })

    expect(gen.next().done).toBe(true)

    expect(mockFetch).toHaveBeenCalled()
  })
})
