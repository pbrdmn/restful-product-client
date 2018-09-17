import {
  INITIAL_STATE,
  actionTypes,
  actions,
  reducers,
  selector,
} from './products'

describe('Product Model', () => {
  it('Actions function generate actions', () => {
    const keys = Object.keys(actions)
    keys.forEach(key => {
      const result = actions[key]()
      expect(result.type).toBe(actionTypes[key])
    })
  })

  it('Request reducer', () => {
    const state = reducers(INITIAL_STATE, actions.request())
    expect(state.loading).toBe(true)
  })

  it('Success reducer', () => {
    const items = [{ id: 1 }]
    const state = reducers(INITIAL_STATE, actions.success({ items }))
    expect(state.loading).toBe(false)
    expect(state.loaded).toBe(true)
    expect(state.count).toBe(1)
  })

  it('Failure reducer', () => {
    const error = { message: 'An error' }
    const state = reducers(INITIAL_STATE, actions.failure({ error }))
    expect(state.loading).toBe(false)
    expect(state.error).toBe(error)
  })

  it('Reset reducer', () => {
    expect(reducers({}, actions.reset())).toBe(INITIAL_STATE)
  })
})
