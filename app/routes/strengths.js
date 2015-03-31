/*jslint node: true*/
"use strict";

var Strength = require('../model/strength').strength;

exports.list = function (req, res) {
  Strength.find({}, 'title -_id', function (err, s) {
    res.json(s);
  });
};

exports.view = function (req, res) {
  Strength.findOne({title: req.params.title}, '-_id', function (err, s) {
    res.json(s);
  });
};
