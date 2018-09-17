import React from 'react'
import renderer from 'react-test-renderer'
import Product from './Product'

it('renders correctly', () => {
  const renderedComponent = renderer
    .create(
      <Product
        id={123}
        product_name="Product Name"
        product_image="product.png"
        description="Description"
        price="$9.99"
      />,
    )
    .toJSON()

  expect(renderedComponent).toMatchSnapshot()
})
