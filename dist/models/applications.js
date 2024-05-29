"use strict";

var mongoose = require('mongoose');
var applicationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  course: String,
  nationality: String,
  state: String,
  age: Number,
  gender: String,
  education: String,
  percentage: Number,
  passingYear: Number,
  address: String,
  additionalDetails: String
});
module.exports = mongoose.model('Application', applicationSchema);