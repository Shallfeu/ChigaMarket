const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/auth', require('./auth.routes'));
router.use('/review', require('./review.routes'));
router.use('/user', require('./user.routes'));
router.use('/product', require('./product.routes'));
router.use('/file', require('./file.routes'));
router.use('/order', require('./order.routes'));
router.use('/category', require('./category.routes'));

module.exports = router;
