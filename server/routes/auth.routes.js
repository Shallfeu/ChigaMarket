const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const tokenService = require('../services/token.service');
const { generateUserImage } = require('../utils/helpers');
const router = express.Router({ mergeParams: true });
const fileService = require('../services/file.service');
const File = require('../models/File');

router.post('/signUp', [
  check('email', 'Invalid email').isEmail(),
  check('password', 'Password must be longer than 8').isLength({ min: 8 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: 'INVALID_DATA',
          code: 400,
        });
      }

      const { password } = req.body;
      const email = req.body.email.toLowerCase();

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          message: 'EMAIL_EXISTS',
          code: 400,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        ...generateUserImage(),
        ...req.body,
        email: req.body.email.toLowerCase(),
        password: hashedPassword,
      });

      const tokens = tokenService.generate({ _id: newUser._id });
      await tokenService.save(newUser._id, tokens.refreshToken);

      // await fileService.createDir(req, new File({ user: newUser._id, name: '' }));

      res.status(201).send({ ...tokens, userId: newUser._id });
    } catch (e) {
      res.status(500).json({
        message: 'Some problem occured on server. Try it later',
      });
    }
  },
]);

router.post('/signIn', [
  check('email', 'Invalid email').normalizeEmail().isEmail(),
  check('password', 'Invalid password').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          code: 400,
          message: 'INVALID_DATA',
        });
      }

      const { password } = req.body;
      const email = req.body.email.toLowerCase();

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(400).json({
          code: 400,
          message: 'EMAIL_NOT_FOUND',
        });
      }

      const isPasswordEqual = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordEqual) {
        return res.status(400).json({
          code: 400,
          message: 'INVALID_PASSWORD',
        });
      }

      const tokens = tokenService.generate({ _id: existingUser._id });
      await tokenService.save(existingUser._id, tokens.refreshToken);

      return res.status(200).send({ ...tokens, userId: existingUser._id });
    } catch (e) {
      res.status(500).json({
        message: 'Some problem occured on server. Try it later',
      });
    }
  },
]);

router.post('/token', async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const tokens = tokenService.generate({ _id: data._id });
    await tokenService.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (e) {
    res.status(500).json({
      message: 'Some problem occured on server. Try it later',
    });
  }
});

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

module.exports = router;
