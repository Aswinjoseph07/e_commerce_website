const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body

  if (!productId || quantity < 1) {
    return res.status(400).json({
      message: "Invalid cart data"
    })
  }

  next()
}

module.exports = validateCart
