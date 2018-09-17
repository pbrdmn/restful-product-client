const api = 'https://whitechdevs.github.io/reactjs-test/products.json'

async function fetchProducts() {
  console.log('fetching products')
  return fetch(api).then(response => response.json())
}

export default fetchProducts
