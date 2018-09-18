import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'
import Product from './Product'
import '../styles/products.css'

class Products extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      page: '1',
      perpage: '12',
      products: [],
      pages: 1,
    }

    this.handlePageChange = this.handlePageChange.bind(this)
    this.handlePerPageChange = this.handlePerPageChange.bind(this)
    this.renderControls = this.renderControls.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    const perpage = parseInt(state.perpage, 10)
    const page = parseInt(state.page, 10)

    const pages = Math.ceil(props.products.items.length / perpage)
    const begin = Math.max(perpage * (page - 1), 0)
    const end = begin + parseInt(state.perpage, 10)

    return {
      products: props.products.items.slice(begin, end),
      pages,
      page: Math.min(page, pages),
    }
  }

  componentDidMount() {
    const { loaded, loading, fetchProducts } = this.props
    if (!loaded && !loading) fetchProducts()

    const queryString = this.props.location && this.props.location.search
    const { page = 1, perpage = 12 } = qs.parse(queryString)

    this.setState({ page, perpage })
  }

  handlePageChange(event) {
    const page = event.target.value
    this.props.updateParams({ ...this.state, page })
    this.setState({ page })
  }

  handlePerPageChange(event) {
    const perpage = event.target.value
    this.props.updateParams({ ...this.state, perpage })
    this.setState({ perpage })
  }

  renderControls() {
    const { products: { count } } = this.props
    const { pages, page, perpage } = this.state

    const pageOptions = []
    for (var i = 1; i <= pages; i++) {
      pageOptions.push(i)
    }
    const perPageOptions = [12, 30, 60, 120]

    return (
      <div className="products__toolbar">
        <div className="product__count">{count} Products</div>
        <div className="products__controls">
          <div className="products__perpage">
            <select onChange={this.handlePerPageChange} value={perpage}>
              {perPageOptions.map(o => (
                <option key={o} value={o}>
                  {o} per page
                </option>
              ))}
            </select>
          </div>

          <div className="products__pagination">
            Page&nbsp;
            <select onChange={this.handlePageChange} value={page}>
              {pageOptions.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { products: { loading, error } } = this.props
    const { products } = this.state

    return (
      <div className="page page__products">
        <h2>All Products</h2>

        {error && <p className="error">{error.message}</p>}

        {loading && <div className="loading">Loading Products</div>}

        {products.length > 0 && (
          <div>
            {this.renderControls()}

            <div className="products">
              {products.map(product => (
                <Product key={product.id} {...product} />
              ))}
            </div>

            {this.renderControls()}
          </div>
        )}
      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOf([
      false,
      PropTypes.shape({
        message: PropTypes.string,
      }),
    ]),
    count: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        product_name: PropTypes.string,
      }),
    ),
  }),
  fetchProducts: PropTypes.func.isRequired,
  updateParams: PropTypes.func.isRequired,
}

export default Products
