import React, { PureComponent } from 'react'

class Products extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { loaded, loading, fetchProducts } = this.props
    if (!loaded && !loading) fetchProducts()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Products</h2>
        <p>This is the products page</p>
      </div>
    )
  }
}

export default Products
