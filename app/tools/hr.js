/*jslint node: true*/
"use strict";

exports.milliseconds = function (hr) {
  return (((hr[0] * 1000000000) + hr[1]) / 1000000);
};
