import { connect } from 'react-redux'
import Products from '../components/Products'
import { actions, selector } from '../models/products'

const mapStateToProps = (state, props) => {
  return selector(state)
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(actions.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
