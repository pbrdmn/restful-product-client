const api = 'https://whitechdevs.github.io/reactjs-test/products.json'

async function fetchProducts() {
  return fetch(api).then(response => response.json())
}

export default fetchProducts
