import { useContext } from "react"
import { CartContext } from "../context/cartContext"

function Cart() {
  const { cartItems, dispatch } = useContext(CartContext)
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>₹{item.price} × {item.quantity}</p>

          <button className="btn" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart
