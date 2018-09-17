import React, { PureComponent } from 'react'

class Products extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      perpage: 8,
      products: [],
    }
  }

  componentDidMount() {
    const { loaded, loading, fetchProducts } = this.props
    if (!loaded && !loading) fetchProducts()
  }

  static getDerivedStateFromProps(props, state) {
    const start = Math.max(0, state.perpage * (state.page - 1))
    const end = start + state.perpage

    return { products: props.products.items.slice(start, end) }
  }

  render() {
    const { products: { loading, error } } = this.props
    const { products, page, perpage } = this.state

    return (
      <div>
        <h2>Products</h2>
        <p>This is the products page</p>
        <p>
          Page {page}, {perpage} per page
        </p>

        {error && <p className="error">{error.message}</p>}

        {loading && <div className="loading">Loading Products</div>}

        {products.length > 0 && (
          <ul className="products">
            {products.map(product => (
              <li key={product.id} className="product">
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
