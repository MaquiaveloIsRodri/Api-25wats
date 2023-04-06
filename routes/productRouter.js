const express = require('express')
const productService = require('../services/productServices')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const service = new productService();
    const products = await service.findProducts()

    return res.json(products);
  } catch (e) {
    res.status(404).json(e.message)
  }
})







module.exports = router;
