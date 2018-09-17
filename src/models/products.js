export const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: false,
  items: [],
  count: 0,
}

const makeAction = (type, params) => ({ type, params })

export const actionTypes = {
  request: 'PRODUCTS_REQUESTED',
  success: 'PRODUCTS_SUCCEEDED',
  failure: 'PRODUCTS_FAILED',
  reset: 'PRODUCTS_RESET',
}

export const actions = {
  request: params => makeAction('PRODUCTS_REQUESTED', params),
  success: params => makeAction('PRODUCTS_SUCCEEDED', params),
  failure: params => makeAction('PRODUCTS_FAILED', params),
  reset: params => makeAction('PRODUCTS_RESET', params),
}

export const reducers = (state = INITIAL_STATE, { type, params }) => {
  switch (type) {
    case actionTypes.request:
      return { ...state, loading: true, error: null }

    case actionTypes.success:
      const { items } = params
      return {
        loaded: true,
        loading: false,
        count: items.length,
        error: null,
        items,
      }

    case actionTypes.failure:
      const { error } = params
      return { ...state, loading: false, error }

    case actionTypes.reset:
      return INITIAL_STATE

    default:
      return state
  }
}

export const selector = state => {
  const { products: { loaded, loading, error, items, count } } = state

  return {
    products: {
      loaded,
      loading,
      error,
      items,
      count,
    },
  }
}
