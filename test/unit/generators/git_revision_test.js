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

describe("GitRevisionGenerator", function() {
  var should = require("should");
  var GitRevisionGenerator = require("../../../lib/generators/git_revision");

  it.skip("specifies a label method that returns a string", function() {
    var dg = new GitRevisionGenerator();
    dg.label.should.be.a.Function;
    dg.label().should.be.a.String;
  });

  it.skip("specifies a value method that returns a string", function() {
    var dg = new GitRevisionGenerator();
    dg.value.should.be.a.Function;
    dg.value().should.be.a.String;
  });
});
