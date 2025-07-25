const express = require('express');
const router = express.Router();
const passport = require('passport');
const { register, login } = require('../controllers/userController');
const { signToken } = require('../utils/auth');

// Local registration and login
router.post('/register', register);
router.post('/login', login);

// GitHub OAuth start
router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

// GitHub OAuth callback
router.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  (req, res) => {
    const token = signToken(req.user);
    res.redirect(`http://localhost:3000/oauth-success?token=${token}`);
  }
);

module.exports = router;
