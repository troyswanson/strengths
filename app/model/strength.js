/*jslint node: true*/
"use strict";

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECT_STRING);

exports.strength = mongoose.model('Strength', new mongoose.Schema({
  title: String,
  description: String
}));
