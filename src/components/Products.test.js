import React from 'react'
import renderer from 'react-test-renderer'
import Products from './Products'

const mockProps = overrides => ({
  products: {
    loading: true,
    loaded: true,
    error: { message: 'Error Message' },
    items: [
      {
        id: 1,
        product_name: 'product',
        description: 'description',
        product_image: 'product.png',
        price: '$0.99',
      },
    ],
    count: 0,
  },
  fetchProducts: jest.fn(),
  ...overrides,
})

describe('Products component', () => {
  it('renders', () => {
    const renderedComponent = renderer
      .create(<Products {...mockProps()} />)
      .toJSON()

    expect(renderedComponent).toMatchSnapshot()
  })

  it('requests products', () => {
    const fetchMock = jest.fn()
    const renderedComponent = renderer
      .create(<Products {...mockProps({ fetchProducts: fetchMock })} />)
      .toJSON()

    expect(fetchMock.mock.calls.length).toBe(1)
  })
})
