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

describe("GeneratorManager", function() {
  var GeneratorManager = require("../../lib/generator_manager");

  var GENERATOR_DIR_VALID = "generators";
  var GENERATOR_LIST_VALID = ["datestring", "npm_version"];
  var ASYNC_DONE_STUB = function() {};

  var CONFIG_VALID = {
    generator_dir: GENERATOR_DIR_VALID,
    generator_list: GENERATOR_LIST_VALID,
    async_done: ASYNC_DONE_STUB
  };

  it("requires an options.generator_dir constructor argument", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_list: GENERATOR_LIST_VALID,
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("throws an error when options.generator_dir is not a string", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_list: GENERATOR_LIST_VALID,
        generator_dir: 1,
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("throws an error when options.generator_dir does not exist", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_list: GENERATOR_LIST_VALID,
        generator_dir: "does-not-exist",
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("requires an options.generator_list constructor argument", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("throws an error when options.generator_list is not an array", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        generator_list: "datestring",
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("throws an error when options.generator_list contains duplicates", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        generator_list: GENERATOR_LIST_VALID.concat(GENERATOR_LIST_VALID),
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("throws an error when options.generator_list is empty", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        generator_list: [],
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("returns the correct generator_map", function() {
    var gm = new GeneratorManager(CONFIG_VALID);
    var map = gm.generator_map();
    var expected_length = GENERATOR_LIST_VALID.length;
    Object.keys(map).length.should.equal.expected_length;
    for(var i in GENERATOR_LIST_VALID) {
      var gen = GENERATOR_LIST_VALID[i];
      map[gen].should.not.equal.undefined;
    }
  });

  it("throws an error when a gen. list member is not in generator_dir", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        generator_list: ["not_valid_generator"],
        async_done: ASYNC_DONE_STUB
      });
    }).should.throw();
  });

  it("requires an options.async_done constructor argument", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        generator_list: GENERATOR_LIST_VALID
      });
    }).should.throw();
  });

  it("throws an error if async_done is not a function", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        generator_list: GENERATOR_LIST_VALID,
        async_done: "not-a-function"
      });
    }).should.throw();
  });

  it("throws an error when any unexpected options fields are defined", function() {
    (function() {
      var gm = new GeneratorManager({
        generator_dir: GENERATOR_DIR_VALID,
        generator_list: GENERATOR_LIST_VALID,
        async_done: ASYNC_DONE_STUB,
        extra: 1234
      });
    }).should.throw();
  });

  it("adds all generator labels/values to object_store argument", function() {
    var gm = new GeneratorManager(CONFIG_VALID);
    var object_store = {};
    gm.apply_generators(object_store);
    var expected_length = GENERATOR_LIST_VALID.length;
    Object.keys(object_store).length.should.equal.expected_length;
    for(var i in GENERATOR_LIST_VALID) {
      var gen = GENERATOR_LIST_VALID[i];
      object_store[gen].should.not.equal.undefined;
    }
  });

  it.skip("calls async_done after adding all generator labels/values", function() {
    // TODO - implement using a mock of async_done method
  });
});
