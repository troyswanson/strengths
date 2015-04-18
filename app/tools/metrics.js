/*jslint node: true*/
"use strict";

var stathat = require('stathat');

exports.track = function (type, label, value) {
  if ((process.env.NODE_ENV === 'production') && (process.env.STATHAT_EZKEY)) {
    switch (type) {
    case 'count':
      stathat.trackEZCount(process.env.STATHAT_EZKEY, label, value, function (status, json) {});
      break;
    case 'value':
      stathat.trackEZValue(process.env.STATHAT_EZKEY, label, value, function (status, json) {});
      break;
    }
  }
};
