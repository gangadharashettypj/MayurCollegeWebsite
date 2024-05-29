"use strict";

var mongoose = require('mongoose');
var contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  subject: String,
  message: String
});
module.exports = mongoose.model('Contact', contactSchema);