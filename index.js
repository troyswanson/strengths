/*jslint node: true*/
"use strict";

var express = require('express');

var app = express();
var router = express.Router();

var strengths = require('./app/routes/strengths');

router.route('/strength/:title').get(strengths.view);
router.route('/strengths/typeahead/:q').get(strengths.typeahead);
router.route('/strengths/search/:q').get(strengths.search);

app.use(express.static(__dirname + '/public'));
app.use(router);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
  console.log("Server running on port " + app.get('port'));
});
