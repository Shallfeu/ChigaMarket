const express = require('express');
const auth = require('../middleware/auth.middleware');
const Review = require('../models/Review');
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await Review.find({ [orderBy]: equalTo });
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: 'Some problem occured on server. Try it later',
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newComment = await Review.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(newComment);
    } catch (e) {
      res.status(500).json({
        message: 'Some problem occured on server. Try it later',
      });
    }
  });

router.delete('/:commentId', auth, async (req, res) => {
  try {
    const { commentId } = req.params;

    const removedComment = await Review.findById(commentId);

    if (removedComment.userId.toString() === req.user._id) {
      await removedComment.remove();
      return res.send(null);
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

module.exports = router;
