/*jslint node: true*/
"use strict";

var Strength = require('../model/strength.js').strength;

exports.view = function (req, res) {
  Strength.findOne({title: req.params.title}, '-_id', function (err, s) {
    res.json(s);
  });
};

exports.search = function (req, res) {
  Strength.find({title: {$regex: req.params.q, $options: 'i'}}, 'title -_id', function (err, s) {
    res.json(s);
  });
};
