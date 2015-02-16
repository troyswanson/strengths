/*jslint node: true*/
"use strict";

var express = require('express');
var mongoose   = require('mongoose');


/* mongoose */

mongoose.connect(process.env.MONGODB_CONNECT_STRING);

var Strength = mongoose.model('Strength', new mongoose.Schema({
  title: String,
  description: String
}));


/* express */

var app = express();
var router = express.Router();

router.route('/strengths/search/:q').get(function (req, res) {
  Strength.find({title: {$regex: req.params.q, $options: 'i'}}, 'title -_id', function (err, s) {
    res.json(s);
  });
});

router.route('/strengths/:title').get(function (req, res) {
  Strength.findOne({title: {$regex: req.params.title, $options: 'i'}}, '-_id', function (err, s) {
    res.json(s);
  });
});

app.use(router);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
  console.log("Server running on port " + app.get('port'));
});
