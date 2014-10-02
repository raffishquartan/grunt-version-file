/*
 * grunt-version-file
 * https://github.com/raffishquartan/grunt-version-file
 *
 * Copyright (c) 2014 raffishquartan
 * Licensed under the MIT license.
 */
// Allow indirectly-executed (should-executed) function literals to pass jshint IIFE warning:
/*jshint -W068 */
// Allow expressions (...should.be.a.Foo;)
/*jshint -W030 */

"use strict";

describe("DatestringGenerator", function() {
  var should = require("should");
  var datestring = require("../../../lib/generators/datestring");

  it.skip("specifies a label_value method that returns a promise object", function() {
    datestring.label_value.should.be.a.Function;
    datestring.label_value().should.be.a.Object; // TODO make this test better
  });
});
