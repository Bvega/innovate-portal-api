const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ githubId: profile.id });
    if (existingUser) return done(null, existingUser);

    const newUser = await User.create({
      githubId: profile.id,
      email: profile.emails?.[0]?.value || undefined,
    });
    done(null, newUser);
  } catch (err) {
    done(err, null);
  }
}));

// optional session support
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user)).catch(err => done(err));
});

module.exports = passport;
