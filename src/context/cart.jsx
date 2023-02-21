import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartContextProvider ({ children }) {
  const [cart, updateCart] = useState([])

  const getProductIndexInCart = (product) => {
    return cart.findIndex(item => item.id === product.id)
  }

  const addToCart = product => {
    // Check if the product is already in the cart
    const productInCartIndex = getProductIndexInCart(product)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return updateCart(newCart)
    }

    // The product is not in the cart
    updateCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const extractOneFromCart = (product) => {
    const productInCartIndex = getProductIndexInCart(product)
    const newCart = structuredClone(cart)
    newCart[productInCartIndex].quantity -= 1
    const checkIfRemovable = newCart[productInCartIndex].quantity === 0
    checkIfRemovable
      ? removeFromCart(product)
      : updateCart(newCart)
  }

  const removeFromCart = (product) => {
    updateCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    updateCart([])
  }
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
