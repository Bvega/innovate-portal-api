const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  password: { type: String }, // Only for local auth
  githubId: { type: String }, // Only for GitHub OAuth
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
