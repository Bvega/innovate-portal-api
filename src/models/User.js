const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  password: { type: String },
  githubId: { type: String, unique: true, sparse: true }, // fix here
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
