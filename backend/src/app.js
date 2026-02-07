const express = require("express")
const cors = require("cors")

const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Server error"
  })
})

module.exports = app
