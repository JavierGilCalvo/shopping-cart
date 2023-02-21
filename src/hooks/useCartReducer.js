import { useReducer } from 'react'
import { CART_ACTION_TYPES, initialCartState, cartReducer } from '../reducers/cart'

export function useCartReducer () {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const extractOneFromCart = product => dispatch({
    type: CART_ACTION_TYPES.EXTRACT_ONE_FROM_CART,
    payload: product
  })

  const clearCart = product => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART,
    payload: []
  })

  return { cart, addToCart, removeFromCart, extractOneFromCart, clearCart }
}
