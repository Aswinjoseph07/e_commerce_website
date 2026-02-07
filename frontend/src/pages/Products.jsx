import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { fetchProducts } from "../services/api"

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="container">Loading products...</p>
  if (error) return <p className="container">{error}</p>

  return (
    <div className="container">
      <h1>Naksh Jewels</h1>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
