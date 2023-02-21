import './Cart.css'
import { useId, useContext } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import { CartContext } from '../context/cart'
import { CartItem } from './CartItem'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, extractOneFromCart, clearCart } = useContext(CartContext)
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => {
              return (
                <CartItem key={product.id} product={product} addToCart={() => addToCart(product)} extractOneFromCart={() => extractOneFromCart(product)} />
              )
            })
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
