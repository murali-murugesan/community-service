'use strict'
const mongoose = require('mongoose');
const User = require('../models/user')
const config = require('../config/default');

mongoose.connect(`mongodb://localhost:27017/${config.service.id}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function signup(data) {
  const user = new User(data);
  const result = user.save(function(err, user) {
    if (err) return console.error(err);
    console.log('User created with id: ', user._id);
  });
}

function findEmailId(emailId) {
  // search if emailId is registered already
}

module.exports = {
  signup,
  findEmailId
}
