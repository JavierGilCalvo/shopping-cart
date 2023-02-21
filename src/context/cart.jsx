import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartContextProvider ({ children }) {
  const { cart, addToCart, removeFromCart, extractOneFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      extractOneFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
