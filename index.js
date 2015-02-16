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

router.route('/strength/:strength_name')
  .get(function (req, res) {
    Strength.findOne({title: req.params.strength_name}, function (err, strength) {
      res.json(strength);
    });
  });

app.use('/', router);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
  console.log("Server running on port " + app.get('port'));
});
