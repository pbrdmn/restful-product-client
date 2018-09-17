import React from 'react'
import PropTypes from 'prop-types'
import '../styles/product.css'

const Product = ({ id, product_name, description, product_image, price }) => (
  <div className="product">
    <img className="product_image" src={product_image} alt="{product_name}" width={340} height={340} />
    <h2 className="product_name">{product_name}</h2>
    <p className="product_description">{description}</p>
    <p className="product_price">{price}</p>
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
