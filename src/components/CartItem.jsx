export function CartItem ({ product, addToCart, extractOneFromCart }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>
          Qty: {product.quantity}
        </small>
        <button onClick={addToCart}>+</button>
        <button onClick={extractOneFromCart}>-</button>
      </footer>
    </li>
  )
}
