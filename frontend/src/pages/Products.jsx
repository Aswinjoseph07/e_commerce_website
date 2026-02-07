import ProductCard from "../components/ProductCard"
import products from "../services/products"

function Products() {
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
