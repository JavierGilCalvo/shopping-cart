import { Products } from './components/Products'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Footer } from './components/Footer'
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { useFilters } from './hooks/UseFilters'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header>
        <Filters />
      </Header>
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
