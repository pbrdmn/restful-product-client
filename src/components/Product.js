import React from 'react'
import PropTypes from 'prop-types'
import '../styles/product.css'

const Product = ({ id, product_name, description, product_image, price }) => (
  <div className="product">
    <img
      className="product_image"
      src={product_image}
      alt="{product_name}"
      width={340}
      height={340}
    />
    <div className="product__details">
      <h2 className="product__name">{product_name}</h2>
      <p className="product__description">{description}</p>
      <p className="product__price">{price}</p>
    </div>
  </div>
)

Product.propTypes = {
  id: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  product_image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default Product
