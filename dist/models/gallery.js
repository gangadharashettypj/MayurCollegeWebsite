"use strict";

var mongoose = require('mongoose');
var gallerySchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});
module.exports = mongoose.model('Gallery', gallerySchema);