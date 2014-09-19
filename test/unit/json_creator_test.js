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

describe("JsonCreator", function() {
  var should = require("should");
  var GeneratorManager = require("../../lib/generator_manager");
  var JsonCreator = require("../../lib/json_creator");

  var GENERATOR_MANAGER_VALID = new GeneratorManager({
    generator_dir: "generators",
    generator_list: ["datestring", "npm_version"]
  });

  it("constructor requires an options.generator_manager parameter", function() {
    (function() {
      var jc = new JsonCreator({});
    }).should.throw();
  });

  it("has a create_json_string method that returns a string", function() {
    var jc = new JsonCreator({
      generator_manager: GENERATOR_MANAGER_VALID
    });
    jc.create_json_string.should.be.a.Function;
    jc.create_json_string().should.be.a.String;
  });

  it.skip("has a create_json_string method that works as expected", function() {
    // TODO implement using mocks in a way that doesn't depend on the actual day or version
  });
});
