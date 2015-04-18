/*jslint node: true*/
"use strict";

var Strength = require('../model/strength').strength;
var metrics = require('../tools/metrics');
var hr = require('../tools/hr');

exports.list = function (req, res) {
  var t = process.hrtime();
  Strength.find({}, 'title -_id', function (err, s) {
    t = process.hrtime(t);
    metrics.track('value', 'query time - all strengths', hr.milliseconds(t));
    res.json(s);
  });
};

exports.view = function (req, res) {
  var t = process.hrtime();
  Strength.findOne({title: req.params.title}, '-_id', function (err, s) {
    t = process.hrtime(t);
    metrics.track('value', 'query time - one strength', hr.milliseconds(t));
    res.json(s);
  });
};
