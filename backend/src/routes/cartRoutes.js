const express = require("express")
const validateCart = require("../middleware/validateCart")

const router = express.Router()

// In-memory cart
let cart = []

router.post("/", validateCart, (req, res) => {
  const { productId, quantity } = req.body

  cart.push({ productId, quantity })

  res.status(201).json({
    message: "Item added to cart",
    cart
  })
})

module.exports = router
