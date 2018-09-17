const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: false,
  items: [],
}

const makeAction = (type, params) => ({ type, params })

export const actionTypes = {
  request: 'PRODUCTS_REQUESTED',
  success: 'PRODUCTS_SUCCEEDED',
  failure: 'PRODUCTS_FAILED',
  clear: 'PRODUCTS_CLEAR',
}

export const actions = {
  request: params => makeAction('PRODUCTS_REQUESTED', params),
  success: params => makeAction('PRODUCTS_SUCCEEDED', params),
  failure: params => makeAction('PRODUCTS_FAILED', params),
  clear: params => makeAction('PRODUCTS_CLEAR', params),
}

export const reducers = (state = INITIAL_STATE, { type, params }) => {
  switch (type) {
    case actionTypes.request:
      return { ...state, loading: true, error: null }

    case actionTypes.success:
      const { items } = params
      return { loaded: true, loading: false, error: null, items }

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
  const { products: { loaded, loading, error, items } } = state

  return {
    products: {
      loaded,
      loading,
      error,
      items,
    },
  }
}