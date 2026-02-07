import { useContext } from "react"
import { CartContext } from "../context/cartContext"

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext)

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    })
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <button className="btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
