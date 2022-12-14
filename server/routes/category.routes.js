const express = require('express');
const Category = require('../models/Category');
const auth = require('../middleware/auth.middleware');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const list = await Category.find();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const category = Category.findOne({ _id: req.body.category });
    if (category) {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.body.category,
        { $push: { subcategories: { category: req.body.subcategory } } },
        {
          new: true,
        },
      );

      return res.send(updatedCategory);
    } else {
      return res.status(400).json({
        code: 400,
        message: 'Category not found',
      });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

router.patch('/', auth, async (req, res) => {
  try {
    const category = Category.findOne({ _id: req.body.category });
    if (category) {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.body.category,
        { subcategories: req.body.subcategories },
        {
          new: true,
        },
      );

      return res.send(updatedCategory);
    } else {
      return res.status(400).json({
        code: 400,
        message: 'Category not found',
      });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

module.exports = router;
