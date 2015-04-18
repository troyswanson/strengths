/*jslint node: true*/
"use strict";

var assert = require('assert');

var hr = require('../app/tools/hr');

describe('hr', function () {
  describe('milliseconds', function () {
    it('should convert an hr array to milliseconds', function () {
      assert.equal(hr.milliseconds([1, 0]), 1000);
      assert.equal(hr.milliseconds([0, 123456789]), 123.456789);
      assert.equal(hr.milliseconds([0, 987654]), 0.987654);
    });
  });
});
