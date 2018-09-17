import React, { PureComponent } from 'react'

class Products extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      perpage: 8,
      products: [],
      pages: 1,
    }

    this.handlePageChange = this.handlePageChange.bind(this)
    this.handlePerPageChange = this.handlePerPageChange.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    const begin = Math.max(
      parseInt(state.perpage, 10) * (parseInt(state.page, 10) - 1),
      0,
    )
    const end = begin + parseInt(state.perpage, 10)
    console.log('filter', begin, end)

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

  render() {
    const { products: { loading, error } } = this.props
    const { products, pages, page, perpage } = this.state
    const pageOptions = []
    for (var i = 1; i <= pages; i++) {
      pageOptions.push(i)
    }

    return (
      <div>
        <h2>Products</h2>
        <p>This is the products page</p>

        <p>
          Page
          <select onChange={this.handlePageChange} value={page}>
            {pageOptions.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </p>

        <p>
          Per Page
          <select onChange={this.handlePerPageChange} value={perpage}>
            <option value={8}>8</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </p>

        {error && <p className="error">{error.message}</p>}

        {loading && <div className="loading">Loading Products</div>}

        {products.length > 0 && (
          <ul className="products">
            {products.map(product => (
              <li key={product.id} className="product">
                {product.id}.
                {product.product_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Products
