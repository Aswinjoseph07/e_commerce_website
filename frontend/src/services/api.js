const BASE_URL = "http://localhost:5000/api"

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`)

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.json()
}
