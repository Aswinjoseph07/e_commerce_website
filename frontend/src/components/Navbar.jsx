import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"

function Navbar() {
  const { cartItems } = useContext(CartContext)

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Naksh Jewels
      </Link>

      <Link to="/cart" className="cart-link">
        Cart ({totalItems})
      </Link>
    </nav>
  )
}

export default Navbar
