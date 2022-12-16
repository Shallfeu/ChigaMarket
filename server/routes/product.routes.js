const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth.middleware');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const list = await Product.find();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

router.patch('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params;
    const product = Product.findById(productId);
    if (product) {
      const updatedProduct = await Product.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
      });

      return res.send(updatedProduct);
    } else {
      return res.status(400).json({
        code: 400,
        message: 'Product not found',
      });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { name } = req.body;
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res.status(400).json({
        message: 'PRODUCT_EXISTS',
        code: 400,
      });
    }

    const newProduct = await Product.create({
      ...req.body,
    });

    res.status(201).send(newProduct);
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

router.delete('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params;
    const removedProduct = await Product.findById(productId);
    await removedProduct.remove();
    return res.send(null);
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

module.exports = router;
