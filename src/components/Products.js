import React, { PureComponent } from 'react'
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
    const begin = Math.max(
      parseInt(state.perpage, 10) * (parseInt(state.page, 10) - 1),
      0,
    )
    const end = begin + parseInt(state.perpage, 10)

    return {
      products: props.products.items.slice(begin, end),
      pages: Math.ceil(props.products.items.length / state.perpage),
    }
  }

  componentDidMount() {
    const { loaded, loading, fetchProducts } = this.props
    if (!loaded && !loading) fetchProducts()
  }

  handlePageChange(event) {
    this.setState({ page: event.target.value })
  }

  handlePerPageChange(event) {
    this.setState({ perpage: event.target.value })
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
      <div className="controls">
        <div className="productCount">{count} Products</div>
        <div className="perPage">
          <select onChange={this.handlePerPageChange} value={perpage}>
            {perPageOptions.map(o => (
              <option key={o} value={o}>
                {o} per page
              </option>
            ))}
          </select>
        </div>

        <div className="pagination">
          Page
          <select onChange={this.handlePageChange} value={page}>
            {pageOptions.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  render() {
    const { products: { loading, error } } = this.props
    const { products } = this.state

    return (
      <div>
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

export default Products
