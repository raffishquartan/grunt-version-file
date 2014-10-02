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
  var git_revision = require("../../../lib/generators/git_revision");

  it.skip("specifies a label_value method that returns a promise object", function() {
    git_revision.label_value.should.be.a.Function;
    git_revision.label_value().should.be.a.Object; // TODO make this test better
  });
});
