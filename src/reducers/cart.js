export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  EXTRACT_ONE_FROM_CART: 'EXTRACT_ONE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const initialCartState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  const { id } = actionPayload

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART:{
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }

      // The product is not in the cart
      const newCart = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
      updateLocalStorage(newCart)
      return newCart
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const newCart = state.filter(item => item.id !== id)
      updateLocalStorage(newCart)
      return newCart
    }
    case CART_ACTION_TYPES.EXTRACT_ONE_FROM_CART: {
      const productInCartIndex = state.findIndex(item => item.id === id)
      const newCart = structuredClone(state)
      newCart[productInCartIndex].quantity -= 1
      const checkIfRemovable = newCart[productInCartIndex].quantity === 0
      const cartToUpdate = checkIfRemovable
        ? state.filter(item => item.id !== id)
        : newCart
      updateLocalStorage(cartToUpdate)
      return cartToUpdate
    }
    default:{
      return []
    }
  }
}
