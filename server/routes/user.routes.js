const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');
const router = express.Router({ mergeParams: true });

router.patch('/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const { password, newPassword } = req.body;
    if (password && newPassword) {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(400).json({
          code: 400,
          message: 'EMAIL_NOT_FOUND',
        });
      }

      const isPasswordEqual = await bcrypt.compare(password, user.password);
      if (!isPasswordEqual) {
        return res.status(400).json({
          code: 400,
          message: 'INVALID_PASSWORD',
        });
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 12);
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { password: hashedNewPassword },
        { new: true },
      );
      return res.send(updatedUser);
    }

    if (userId === req.user._id) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
      res.send(updatedUser);
    } else {
      res.status(401).json({
        code: 401,
        message: 'Unauthorized',
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const list = await User.find();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

module.exports = router;
