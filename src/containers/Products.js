import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import qs from 'query-string'
import { actions, selector } from '../models/products'
import Products from '../components/Products'

const mapStateToProps = (state, props) => ({
  products: selector(state),
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(actions.request()),
  updateParams: ({ page, perpage }) => {
    dispatch(push({ search: qs.stringify({ page, perpage }) }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
