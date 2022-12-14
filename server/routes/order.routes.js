const express = require('express');
const auth = require('../middleware/auth.middleware');
const Order = require('../models/Order');
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = equalTo ? await Order.find({ [orderBy]: equalTo }) : await Order.find();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: 'Some problem occured on server. Try it later',
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newOrder = await Order.create({
        ...req.body,
      });
      res.status(201).send(newOrder);
    } catch (e) {
      res.status(500).json({
        message: 'Some problem occured on server. Try it later',
      });
    }
  });

module.exports = router;
