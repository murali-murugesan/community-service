'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "userType": String,
  "emailId": String,
  "firstName": String,
  "lastName": String,
  "city": String,
  "mobileNo": String,
  "_enabled": Boolean,
  "createdDate": {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('users', userSchema);
