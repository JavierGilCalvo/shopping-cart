import { Products } from './components/Products'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Footer } from './components/Footer'
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartContextProvider } from './context/cart'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartContextProvider>
      <Header>
        <Filters />
      </Header>
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartContextProvider>
  )
}

export default App
