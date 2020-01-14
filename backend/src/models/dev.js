const mongoose = require('mongoose');
const Local = require('./utils/local');

const DevSchema = new mongoose.Schema({
  name: String,
  github_user: String,
  bio: String,
  avatar_url: String,
  tecs: [String],
  location: {
    type: Local,
    index: '2dsphere'
  }
})

module.exports = mongoose.model('Dev', DevSchema);