"use strict";

var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  month: String,
  year: Number
});
module.exports = mongoose.model('Event', eventSchema);