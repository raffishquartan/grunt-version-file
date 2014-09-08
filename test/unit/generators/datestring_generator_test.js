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
  var DatestringGenerator = require("../../../lib/generators/datestring_generator");

  it.skip("specifies a label method that returns string", function() {
    var dg = new DatestringGenerator();
    dg.label.should.be.a.Function;
    dg.label().should.be.a.String;
  });

  it.skip("specifies a value method that returns a promise", function() {
    var dg = new DatestringGenerator();
    dg.value.should.be.a.Function;
  });
});
